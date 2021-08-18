import React, { useState, useEffect } from 'react'
import firebase from '../../firebase/firebaseSingleton'
import { Container } from 'reactstrap'
import XLSX from 'xlsx'
import {
  InfoSec
} from './List.elements'


const List = () => {

  const [data, setdata] = useState([]);

  const exportFile = () => {
    let users = [["LINKS"]]

    data.forEach((user) => {
      let userArray = [user]
      users.push(userArray)
    })

    const wb = XLSX.utils.book_new()
    const wsAll = XLSX.utils.aoa_to_sheet(users)
    XLSX.utils.book_append_sheet(wb, wsAll, "All Users")
    XLSX.writeFile(wb, "export-demo.xlsx")

  }

  const peticionGet = () => {

    firebase.child("links").on("value", (link) => {

      let obj = link.val()
      let arr = []

      Object.values(obj).forEach(e => {
        if ((Number(e.data) + 43200000) >= Date.now()) {
          arr.push(e.name)
        }
      });
      setdata(arr)
    });
  };

  useEffect(() => {
    peticionGet()
    //eslint-disable-next-line
  }, [])

  return (
    <Container>
      <InfoSec>
        <div>
          {data.map((e, index) => (
            <div>
              <a href={e} key={index}>
                {e}
              </a>
            </div>
          ))}
          <button
            onClick={exportFile}>Export to Excel</button>
        </div>
        uwu
      </InfoSec>
    </Container>
  )
}

export default List
