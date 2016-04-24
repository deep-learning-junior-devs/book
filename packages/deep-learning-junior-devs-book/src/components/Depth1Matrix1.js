import React from 'react'
// TODO: Export this at the top level so users can use it
import styles from './styles/Matrix.css'

const Depth1Matrix1 = ({ data }) =>
  <table>
    <tbody>
      {
        data.map((row, i) =>
          <tr key={i}>
            {
              row.map((item, j) =>
                <td className={`py1 px2 ${styles.matrixCell}`} key={`${i},${j}`}>
                  {item}
                </td>)
            }
          </tr>
        )
      }
    </tbody>
  </table>

export default Depth1Matrix1
