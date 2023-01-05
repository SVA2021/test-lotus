import {FC, useState} from 'react';
import {Timer} from '../Timer';
import {formatDate, getInitialTime, getTurn} from '../utils';
import './AuctionPage.scss';
import {AuctionPageProps} from './AuctionPage.types';


export const AuctionPage: FC<AuctionPageProps> = ({auction}) => {

  const {name, startTime, members} = auction;
  const title = `${name} (${formatDate(startTime)})`;

  const [update, setUpdate] = useState(0);
  const [activeMember, setActiveMember] = useState(getTurn(startTime) % members.length);
  const initialTime = getInitialTime(startTime);

  return (
    <div className='auction' >
      <header className="header">
        <h1 className="title">
          Ход торгов
          <b className='name' >{title}</b>
        </h1>
      </header>
      <main className="main">
        <table className="table">
          <caption>
            <span className="comment">
              Уважаемые участники, во время вашего хода вы можете изменить параметры торгов, указанных в таблице
            </span>
          </caption>
          <thead>
            <tr>
              <th>ход</th>
              {
                members.map((item, index) =>
                  <th key={index}>
                    {index === activeMember &&
                      <Timer
                        initialTime={initialTime}
                        handleEndTime={() => setActiveMember((v) => getTurn(startTime) % members.length)}
                      />}
                  </th>
                )
              }
            </tr>
            <tr>
              <th>параметры и требования</th>
              {
                members.map((item, index) =>
                  <th key={index}>
                    <p>участник №{index + 1}</p>
                    <p>
                      {item.name}
                      {item.isOnline && <span className='online' >online</span>}
                    </p>
                  </th>
                )
              }
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Наличие комплекса мероприятий, повышающих стандарты качества изделий</td>
              {members.map((item, index) => <td key={index}>{item.project.quality ? 'ДА' : '-'}</td>)}
            </tr>
            <tr>
              <td>Срок изготовления лота, дней</td>
              {members.map((item, index) => <td key={index}>{item.project.timingDays}</td>)}
            </tr>
            <tr>
              <td>Гарантийные обязательства, мес</td>
              {members.map((item, index) => <td key={index}>{item.project.guaranteeMonths}</td>)}
            </tr>
            <tr>
              <td>Условия оплаты</td>
              {members.map((item, index) => <td key={index}>{item.project.firstPayment}%</td>)}
            </tr>
            <tr>
              <td>Стоимость изготовления лота, руб (без НДС)</td>
              {members.map((item, index) =>
                <td key={index}>
                  <p className="max">{item.project.price.max.toLocaleString('ru-RU', {style: 'currency', currency: 'RUB', maximumFractionDigits: 0, })}</p>
                  <p className="step">{item.project.price.step.toLocaleString('ru-RU', {style: 'currency', currency: 'RUB', maximumFractionDigits: 0, })}</p>
                  <p className="min">{item.project.price.min.toLocaleString('ru-RU', {style: 'currency', currency: 'RUB', maximumFractionDigits: 0, })}</p>
                </td>
              )}
            </tr>
            <tr>
              <td className='buttons' >
                <button
                  className='reload'
                  onClick={() => setUpdate((v) => v + 1)}
                >
                  RELOAD
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </main>
    </div>
  );
};