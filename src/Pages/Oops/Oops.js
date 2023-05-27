import React from 'react'
import { useTranslation } from 'react-i18next';
import './oops.scss';
import '../../fonts/fonts.scss';
import oopsTwo from "./pictures/404.svg"


const Oops = () => {
    const { t } = useTranslation(["Oops"])
  return (
    <>
    <div className="first-screen__404">
            <main className="page">
                <div className="page__container">

                    <div className="oops__img">
                        <img src={oopsTwo} alt="404"/>
                    </div>

                    <div className="oops__text">
                        <h2>{t ("oops")}</h2>
                        <p>{t ("oopsText")}</p>
                        <button className="back__to__home__btn">{t ("oopsBtn")}</button>
                    </div>
                </div>

            </main>
        </div>
    </>
  )
}

export default Oops