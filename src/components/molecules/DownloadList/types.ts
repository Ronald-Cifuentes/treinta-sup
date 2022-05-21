/* eslint-disable @typescript-eslint/no-explicit-any */
import {MemoExoticComponent, SVGProps} from 'react';
import {User} from 'services/models';

export interface DownloadListItemProps {
  text: string;
  Icon: MemoExoticComponent<(props: SVGProps<SVGSVGElement>) => JSX.Element>;
  color: string;
  downloadFX: () => Promise<any> | void;
  disabled?: boolean;
}

export interface DownloadListProps {
  user: User | undefined;
  moduleName: string;
}
