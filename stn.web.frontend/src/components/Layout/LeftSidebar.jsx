import { useEffect, React, useState } from "react";
import { useLocation } from 'react-router-dom';
import Accordion from "react-bootstrap/Accordion";
import { MaterialSymbol } from "react-material-symbols";
import "react-material-symbols/rounded";
import { getMenu } from "../../services/Services";

const LeftSidebar = ({ toogleActive }) => {
  const location = useLocation();
  const pathname = location.pathname;
  const [nivel1, setNivel1] = useState([]);
  const [nivel2, setNivel2] = useState([]);
  const [nivel3, setNivel3] = useState([]);
  useEffect(() => {
    const usuario = sessionStorage.getItem('user');
    const request = {
      'idUsuario': (JSON.parse(usuario).IDUsuario).toString()
    }
    getMenu(request).then((res) => {
      if (res.status === 0) {
        setNivel1(res.data.filter(x => x.Nivel == 1));
        setNivel2(res.data.filter(x => x.Nivel == 2));
        setNivel3(res.data.filter(x => x.Nivel == 3));
      }
    })
  }, [])


  return (
    <>
      <div className="sidebar-area">
        <div className="logo position-relative">
          <a
            href="/dashboard"
            className="d-block text-decoration-none position-relative"
          >
            {/* <img
              src="/images/logo-icon.png"
              alt="logo-icon"
              width={26}
              height={26}
            /> */}

            <img
              src="/images/Recurso 1.png"
              alt="logo-icon"
              width={150}
              height={100}
            />
           {/*  <span className="logo-text fw-bold text-dark">STN</span> */}
          </a>
          <button
            className="sidebar-burger-menu bg-transparent p-0 border-0 opacity-0 z-n1 position-absolute top-50 end-0 translate-middle-y"
            onClick={toogleActive}
          >
            <MaterialSymbol icon="close" size={24} />
          </button>
        </div>

        <div className="sidebar-menu">
          <div className="menu-title small text-uppercase">
            <span className="menu-title-text">MENU DE OPCIONES</span>
          </div>
          {
            nivel1.map((item, index) => {
              const subMenu = nivel2.filter(x => x.IDPaginaPadre == item.IDPagina);
              return (
                <Accordion key={index} defaultActiveKey="0" flush>
                  <Accordion.Item eventKey={index}>
                    <Accordion.Header>
                      <MaterialSymbol icon={item.Icono} />
                      <span className="title" style={{fontWeight: 600}}>{item.Abreviatura}</span>
                      <span className="count">{subMenu.length}</span>
                    </Accordion.Header>
                    <Accordion.Body>
                      <ul className="sub-menu">
                        {
                          subMenu.map((item2, index2) => {
                            const subMenu2 = nivel3.filter(x => x.IDPaginaPadre == item2.IDPagina);
                            const num = `${index + 1}${index2}`;
                            return (
                              <>
                                {subMenu2.length > 0 && (
                                  // TODO: Pintar subMenu con sub menú
                                  <Accordion key={index} defaultActiveKey="0" flush>
                                    <Accordion.Item eventKey={`${index}${index2}`}>
                                      <Accordion.Header>
                                        <MaterialSymbol icon={item.Icono} />
                                        <span className="title" style={{paddingLeft: 20}}>{item2.Abreviatura}</span>
                                        <span className="count">{subMenu2.length}</span>
                                      </Accordion.Header>
                                      <Accordion.Body>
                                        <ul className="sub-menu">
                                          {
                                            subMenu2.map((item3, index3) => {
                                              return (
                                                <div key={index3}>
                                                  <ul className="sub-menu" style={{paddingLeft: 30}} key={index3}>
                                                    <li className="menu-item">
                                                      <a
                                                        href={item3.Descripcion}
                                                        className={`menu-link ${pathname === item3.Descripcion ? "active" : ""
                                                          }`}
                                                      >
                                                        {item3.Abreviatura}
                                                      </a>
                                                    </li>
                                                  </ul>
                                                </div>
                                              )
                                            })
                                          }
                                        </ul>
                                      </Accordion.Body>
                                    </Accordion.Item>
                                  </Accordion>
                                )}
                                {subMenu2.length == 0 && (
                                  // TODO: Pintar subMenu con sub menú
                                  <ul className="sub-menu" key={index2}>
                                    <li className="menu-item">
                                      <a
                                        href={item2.Descripcion}
                                        className={`menu-link ${pathname === item2.Descripcion ? "active" : ""
                                          }`}
                                      >
                                        {item2.Abreviatura}
                                      </a>
                                    </li>
                                  </ul>
                                )}
                              </>
                            )
                          })
                        }
                      </ul>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              )
            })
          }
        </div>
      </div>
    </>
  );
};

export default LeftSidebar;
