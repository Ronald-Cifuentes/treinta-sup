import { createData } from 'components/atoms/SpecialTable/Functions'
import { Rows } from '../../atoms/SpecialTable/Mocks'

export const createOptionsRowsPerPage = () => {
    let ret:Array<Object> = []
    for (let i = 1; i <= 20; i++) {
        ret.push({ label: `Filas por página: ${i}`, value: `${i}` })
    }
    return ret
}

export const optionsRowsPerPage = createOptionsRowsPerPage()


export const getData: Function = ({page, itemsByPage, setResponse, setError, date, tab}) => {
    console.log("Date and Tabs :>>>>", {date,tab})
    fetch(`http://localhost:5001/orders?_page=${page}&_limit=${itemsByPage}`)
    .then(res=>res.json())
    .then(res=>{
            const rowsWithComponents: Array<Rows> = []
            res.forEach(item => {
                rowsWithComponents.push(
                    createData(
                        item.id,
                        {status: item.status.name, variant: 'warning'},
                        item.customer,
                        item.contactPhone,
                        item.createdAt,
                        item.updatedAt,
                        item.deliveryDate,
                        item.value,
                        "https://www.google.com"
                    )
                )
            });
            setResponse(rowsWithComponents)
        })
        .catch(err=>setError(err))
}

let orders = [
    {
        "id": "3fa85f64-5717-4562-b3fc-2c963f66afa1",
        "customer": "Pedro Perez",
        "contactPhone": "3204291920",
        "createdAt": "2022-05-25T23:11:56.558Z",
        "updatedAt": "2022-05-25T23:11:56.558Z",
        "deliveryDate": "2022-05-25T23:11:56.558Z",
        "value": 1576.45,
        "status": {
            "id": 1,
            "name": "Recibido"
        }
    },
    {
        "id": "3fa85f64-5717-4562-b3fc-2c963f66afa2",
        "customer": "Pedro Perez",
        "contactPhone": "3204291920",
        "createdAt": "2022-05-25T23:11:56.558Z",
        "updatedAt": "2022-05-25T23:11:56.558Z",
        "deliveryDate": "2022-05-25T23:11:56.558Z",
        "value": 1576.45,
        "status": {
            "id": 1,
            "name": "Recibido"
        }
    },
    {
        "id": "3fa85f64-5717-4562-b3fc-2c963f66afa3",
        "customer": "Pedro Perez",
        "contactPhone": "3204291920",
        "createdAt": "2022-05-25T23:11:56.558Z",
        "updatedAt": "2022-05-25T23:11:56.558Z",
        "deliveryDate": "2022-05-25T23:11:56.558Z",
        "value": 1576.45,
        "status": {
            "id": 1,
            "name": "Recibido"
        }
    },
    {
        "id": "3fa85f64-5717-4562-b3fc-2c963f66afa4",
        "customer": "Pedro Perez",
        "contactPhone": "3204291920",
        "createdAt": "2022-05-25T23:11:56.558Z",
        "updatedAt": "2022-05-25T23:11:56.558Z",
        "deliveryDate": "2022-05-25T23:11:56.558Z",
        "value": 1576.45,
        "status": {
            "id": 1,
            "name": "Recibido"
        }
    },
    {
        "id": "3fa85f64-5717-4562-b3fc-2c963f66afa5",
        "customer": "Pedro Perez",
        "contactPhone": "3204291920",
        "createdAt": "2022-05-25T23:11:56.558Z",
        "updatedAt": "2022-05-25T23:11:56.558Z",
        "deliveryDate": "2022-05-25T23:11:56.558Z",
        "value": 1576.45,
        "status": {
            "id": 1,
            "name": "Recibido"
        }
    },
    {
        "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
        "customer": "Pedro Perez",
        "contactPhone": "3204291920",
        "createdAt": "2022-05-25T23:11:56.558Z",
        "updatedAt": "2022-05-25T23:11:56.558Z",
        "deliveryDate": "2022-05-25T23:11:56.558Z",
        "value": 1576.45,
        "status": {
            "id": 1,
            "name": "Recibido"
        }
    },
    {
        "id": "3fa85f64-5717-4562-b3fc-2c963f66afa7",
        "customer": "Pedro Perez",
        "contactPhone": "3204291920",
        "createdAt": "2022-05-25T23:11:56.558Z",
        "updatedAt": "2022-05-25T23:11:56.558Z",
        "deliveryDate": "2022-05-25T23:11:56.558Z",
        "value": 1576.45,
        "status": {
            "id": 1,
            "name": "Recibido"
        }
    },
    {
        "id": "3fa85f64-5717-4562-b3fc-2c963f66afa8",
        "customer": "Pedro Perez",
        "contactPhone": "3204291920",
        "createdAt": "2022-05-25T23:11:56.558Z",
        "updatedAt": "2022-05-25T23:11:56.558Z",
        "deliveryDate": "2022-05-25T23:11:56.558Z",
        "value": 1576.45,
        "status": {
            "id": 1,
            "name": "Recibido"
        }
    },
    {
        "id": "3fa85f64-5717-4562-b3fc-2c963f66afa9",
        "customer": "Pedro Perez",
        "contactPhone": "3204291920",
        "createdAt": "2022-05-25T23:11:56.558Z",
        "updatedAt": "2022-05-25T23:11:56.558Z",
        "deliveryDate": "2022-05-25T23:11:56.558Z",
        "value": 1576.45,
        "status": {
            "id": 1,
            "name": "Recibido"
        }
    },
    {
        "id": "3fa85f64-5717-4562-b3fc-2c963f66afa10",
        "customer": "Pedro Perez",
        "contactPhone": "3204291920",
        "createdAt": "2022-05-25T23:11:56.558Z",
        "updatedAt": "2022-05-25T23:11:56.558Z",
        "deliveryDate": "2022-05-25T23:11:56.558Z",
        "value": 1576.45,
        "status": {
            "id": 1,
            "name": "Recibido"
        }
    },
    {
        "id": "3fa85f64-5717-4562-b3fc-2c963f66afa11",
        "customer": "Pedro Perez",
        "contactPhone": "3204291920",
        "createdAt": "2022-05-25T23:11:56.558Z",
        "updatedAt": "2022-05-25T23:11:56.558Z",
        "deliveryDate": "2022-05-25T23:11:56.558Z",
        "value": 1576.45,
        "status": {
            "id": 1,
            "name": "Recibido"
        }
    },
    {
        "id": "3fa85f64-5717-4562-b3fc-2c963f66afa12",
        "customer": "Pedro Perez",
        "contactPhone": "3204291920",
        "createdAt": "2022-05-25T23:11:56.558Z",
        "updatedAt": "2022-05-25T23:11:56.558Z",
        "deliveryDate": "2022-05-25T23:11:56.558Z",
        "value": 1576.45,
        "status": {
            "id": 1,
            "name": "Recibido"
        }
    },
    {
        "id": "3fa85f64-5717-4562-b3fc-2c963f66afa13",
        "customer": "Pedro Perez",
        "contactPhone": "3204291920",
        "createdAt": "2022-05-25T23:11:56.558Z",
        "updatedAt": "2022-05-25T23:11:56.558Z",
        "deliveryDate": "2022-05-25T23:11:56.558Z",
        "value": 1576.45,
        "status": {
            "id": 1,
            "name": "Recibido"
        }
    },
    {
        "id": "3fa85f64-5717-4562-b3fc-2c963f66afa14",
        "customer": "Pedro Perez",
        "contactPhone": "3204291920",
        "createdAt": "2022-05-25T23:11:56.558Z",
        "updatedAt": "2022-05-25T23:11:56.558Z",
        "deliveryDate": "2022-05-25T23:11:56.558Z",
        "value": 1576.45,
        "status": {
            "id": 1,
            "name": "Recibido"
        }
    },
    {
        "id": "3fa85f64-5717-4562-b3fc-2c963f66afa15",
        "customer": "Pedro Perez",
        "contactPhone": "3204291920",
        "createdAt": "2022-05-25T23:11:56.558Z",
        "updatedAt": "2022-05-25T23:11:56.558Z",
        "deliveryDate": "2022-05-25T23:11:56.558Z",
        "value": 1576.45,
        "status": {
            "id": 1,
            "name": "Recibido"
        }
    },
    {
        "id": "3fa85f64-5717-4562-b3fc-2c963f66afa16",
        "customer": "Pedro Perez",
        "contactPhone": "3204291920",
        "createdAt": "2022-05-25T23:11:56.558Z",
        "updatedAt": "2022-05-25T23:11:56.558Z",
        "deliveryDate": "2022-05-25T23:11:56.558Z",
        "value": 1576.45,
        "status": {
            "id": 1,
            "name": "Recibido"
        }
    },
    {
        "id": "3fa85f64-5717-4562-b3fc-2c963f66afa17",
        "customer": "Pedro Perez",
        "contactPhone": "3204291920",
        "createdAt": "2022-05-25T23:11:56.558Z",
        "updatedAt": "2022-05-25T23:11:56.558Z",
        "deliveryDate": "2022-05-25T23:11:56.558Z",
        "value": 1576.45,
        "status": {
            "id": 1,
            "name": "Recibido"
        }
    },
    {
        "id": "3fa85f64-5717-4562-b3fc-2c963f66afa18",
        "customer": "Pedro Perez",
        "contactPhone": "3204291920",
        "createdAt": "2022-05-25T23:11:56.558Z",
        "updatedAt": "2022-05-25T23:11:56.558Z",
        "deliveryDate": "2022-05-25T23:11:56.558Z",
        "value": 1576.45,
        "status": {
            "id": 1,
            "name": "Recibido"
        }
    },
    {
        "id": "3fa85f64-5717-4562-b3fc-2c963f66afa19",
        "customer": "Pedro Perez",
        "contactPhone": "3204291920",
        "createdAt": "2022-05-25T23:11:56.558Z",
        "updatedAt": "2022-05-25T23:11:56.558Z",
        "deliveryDate": "2022-05-25T23:11:56.558Z",
        "value": 1576.45,
        "status": {
            "id": 1,
            "name": "Recibido"
        }
    },
    {
        "id": "3fa85f64-5717-4562-b3fc-2c963f66afa20",
        "customer": "Pedro Perez",
        "contactPhone": "3204291920",
        "createdAt": "2022-05-25T23:11:56.558Z",
        "updatedAt": "2022-05-25T23:11:56.558Z",
        "deliveryDate": "2022-05-25T23:11:56.558Z",
        "value": 1576.45,
        "status": {
            "id": 1,
            "name": "Recibido"
        }
    },
    {
        "id": "3fa85f64-5717-4562-b3fc-2c963f66afa21",
        "customer": "Pedro Perez",
        "contactPhone": "3204291920",
        "createdAt": "2022-05-25T23:11:56.558Z",
        "updatedAt": "2022-05-25T23:11:56.558Z",
        "deliveryDate": "2022-05-25T23:11:56.558Z",
        "value": 1576.45,
        "status": {
            "id": 1,
            "name": "Recibido"
        }
    }
]

interface PropTypesGetDataMock {
    page?:number,
    itemsByPage?:number,
    setResponse?:any,
    setError?:any
}

export const getDataMock: Function = ({page = 0, itemsByPage = 0, setResponse, setError}:PropTypesGetDataMock) => {
    const rowsWithComponents: Array<Rows> = []
    let to = (itemsByPage*page)-1
    let from = Math.abs(itemsByPage-to-1)


    for (let i = from; i <= to; i++) {
        rowsWithComponents.push(
            createData(
                orders[i].id,
                {status: orders[i].status.name, variant: 'warning'},
                orders[i].customer,
                orders[i].contactPhone,
                orders[i].createdAt,
                orders[i].updatedAt,
                orders[i].deliveryDate,
                orders[i].value,
                "https://www.google.com"
            )
        )
    }
    setResponse(rowsWithComponents)
}