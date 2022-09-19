import {
  getDownloadURL,
  ref,
  StorageError,
  uploadBytesResumable,
} from '@firebase/storage';

import {storage} from 'config/firebase';
import {ACTIONS, useUploadBulk} from 'context/UploadBulkContext';
import {ChangeEventHandler, FC, useState} from 'react';
import {Arrow, Error, HideInput, LoadImage} from './ProductLoad.styled';
import {ProductLoadProps} from './types';

export const ProductLoad: FC<ProductLoadProps> = ({id, image}) => {
  const {dispatch} = useUploadBulk();
  const [progress, setProgress] = useState<number>(0);
  const [picture, setPicture] = useState<string | undefined>(image);
  const [error, setError] = useState<StorageError>();
  const handleLoadImage = (): void => {
    const getFile = document?.getElementById(`getFile-${id}`);
    getFile?.click();
  };

  const handleHideInput: ChangeEventHandler<HTMLInputElement> = e => {
    const file = e.target.files?.[0];
    if (file && file.size < 2000000) {
      const storageRef = ref(storage, `/${file?.name}`);
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        'state_changed',
        snapshot => {
          setProgress((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
        },
        err => setError(err),
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(url => {
            setPicture(url);
            dispatch({type: ACTIONS.UPLOAD_IMAGE, payload: {id, url}});
          });
        },
      );
    }
  };

  const handleError = (): void => {
    setError(undefined);
    setProgress(0);
  };

  return error ? (
    <Error onClick={handleError}>Error Load</Error>
  ) : picture ? (
    <img src={picture} alt="load_image" />
  ) : progress ? (
    <progress value={progress} max="100" />
  ) : (
    <>
      {JSON.stringify(error)}
      <LoadImage onClick={handleLoadImage}>
        Cargar Imágen
        <Arrow />
      </LoadImage>
      <HideInput
        type="file"
        id={`getFile-${id}`}
        onChange={handleHideInput}
        accept="image/png, .jpg"
      />
    </>
  );
};
