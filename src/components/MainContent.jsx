import React from 'react'
import '../styles/MainContent.scss'

const MainContent = () => {
  const arr = [1, 2, 3, 4, 5, 6]
  return (
    <div className='main-text'><h2>Текст</h2>
      <div className='maincontent'>

        {arr.map((it) => {
          return (
            <div className='pizza-card' key={it + 123}>
              <div className='pizza-img'><img src="https://www.pngall.com/wp-content/uploads/4/Pepperoni-Dominos-Pizza-PNG-Free-Download.png" alt="pizza-img" /></div>
              <div className='pizza-card-text'>{it}</div>
              <div className='pizza-params'>
                <div className='pizza-type-group'>
                  <div className='pizza-thin'>Тонкое</div>
                  <div className='pizza-trad'>Традиционное</div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default MainContent
