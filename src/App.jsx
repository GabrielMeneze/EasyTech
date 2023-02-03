import { useState, useEffect } from 'react'
import axios from 'axios'
import { Card } from './Components/Cards/Card'
import { ModalPath } from './Components/PostMethod/Post'
import "bootstrap/dist/css/bootstrap.min.css"
import "../src/style.css"
import './App.css';

function App() {
  const [datapost, setDatapost] = useState()
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [modalshow2, setModalshow2] = useState(false)

  // GET
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await axios.get("https://localhost:3000/");
        setDatapost(res.data.results);
      } catch (error) {
        setError(error);
      }
      setLoading(false);
    };

    fetchData();
  }, []);


  // GET (Procura um usuario especifico)
  const handleSearch = async () => {
    await axios
      .get(`https://localhost:3000/${user}`)
      .then((response) => {
        setListUser(response.data);
      })
      .catch((e) => console.log(e));
  };

  return (
    <>
      <header className="title">
        <h1>EasyTech!!!</h1>
      </header>
      <main >
        <section>
          <div className="col-6 mx-auto d-flex mt-5">
            <div className="search">
              <input
                type="text"
                placeholder="Type here..."
                onChange={(e) => setUser(e.target.value)}
              />
              <button onClick={() => handleSearch()}>Search</button>
            </div>
            <button
              className='col-4'
              onClick={() => {
                setModalshow2(true)
              }}>
              <ModalPath show={modalshow2} onHide={() => setModalshow2(false)} />
              Adicionar Usuários!
            </button>
          </div>
          <article>
            {datapost !== undefined && datapost.map((item) => {
              return (
                <Card
                  conteudo={item.content}
                  id={item.id}
                  username={item.username}
                />
              )
            })}
          </article>
        </section>

      </main>
      <ModalPath />
    </>
  )
}

export default App
