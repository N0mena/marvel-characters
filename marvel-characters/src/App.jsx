import {useEffect, useState} from 'react'
import './App.css'



function getData() {
    const [data, setData] = useState(data);

    useEffect(() => {
      fetch("/characters.json")
        .then(res => res.json())
          .then(json => setData(json))
          .catch(err => console.log(err))
    }, []);


  return (
    <>
    <table>
        <tr>
            <th>
                ID
            </th>
            <th>
                Name
            </th>
            <th>
                Movie
            </th>
        </tr>
        <tbody>
        {data &&(
            <tr>
                {
                    data.map(item => (
                        <td key={item.id}>{item.id}</td>
                    ))
                }
            </tr>
        )}
        </tbody>
    </table>

    </>

  )
}

export default getData
