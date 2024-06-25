import capybaraPhoto1 from "../../assets/img/capybara-pic-1.jpg";
import capybaraPhoto2 from "../../assets/img/capybara-pic-2.jpg";
import capybaraPhoto3 from "../../assets/img/capybara-pic-3.jpeg";
import capybaraPhoto4 from "../../assets/img/capybara-pic-4.jpg";
import capybaraPhoto5 from "../../assets/img/capybara-pic-5.jpg";
import capybaraPhoto6 from "../../assets/img/capybara-pic-6.jpeg";

import React from 'react';

const About = () => {
    const imgStyle = 'col-3 rounded border border-warning';
    return (
        <>
            <section className="row fs-5 mb-3">
                <h1 className="text-warning">Кто такая капибара?</h1>
                <div className="d-flex justify-content-center gap-5 my-4">
                    <img src={capybaraPhoto1} alt="Капибары на лужайке" className={imgStyle}/>
                    <img src={capybaraPhoto2} alt="Капибара и капибара поменьше" className={imgStyle}/>
                    <img src={capybaraPhoto3}
                         alt="маленькие капибары вокруг большой капибары" className={imgStyle}/>
                </div>
                <p className="mb-3">
                    <b>Капибара</b> или <b>водосвинка</b> (<i className="text-secondary-emphasis">Hydrochoerus
                    hydrochoeris</i>) является родственницей
                    всем известной морской свинки и напоминает ее увеличенную в десятки раз копию. Это самый крупный
                    представитель отряда грызунов на планете. Длина ее тела более 1 метра, высота в холке — выше
                    полуметра, а живая масса тела от 50 до 75 килограммов (рекордная живая масса — 91 килограмм).
                    Самки крупнее и тяжелее самцов. Своими размерами капибара напоминает молодую домашнюю свинью.
                    Голова крупная, морда почти квадратная, ноздри широко расставлены, глаза и уши небольшие. В
                    ротовой полости находится 20 зубов, резцы оранжевого цвета и растут всю жизнь. Тело
                    бочкообразной формы, хвост рудиментарный. На передних конечностях по 4 пальца, на задних по 3
                    пальца. Между пальцами лап расположены плавательные перепонки. Задние конечности длиннее
                    передних.
                </p>
                <p className="mb-3">
                    Тело капибары покрыто редковатой грубой щетинистой шерстью, которая обладает водоотталкивающими
                    свойствами. Длина шерсти от 3 до 12 сантиметров. Подшерсток отсутствует, а окраска шерсти
                    буровато-рыжая. На животе шерсть более светлого оттенка. Молодняк окрашен светлее взрослых
                    особей.
                </p>
                <p className="mb-5">
                    Еще в природе существует <b>малая капибара</b> (<i>Hydrochoerus isthmius</i>), примерно в
                    полтора раза меньше обычной капибары. Это редкий малоизученный вид, описанный в 1991 году.
                </p>
                <h3 className="mb-3 text-warning">Интересные факты:</h3>
                <ul className="mx-5 fs-6 text-warning fw-bold">
                    <li>Водосвинки замечательно плавают.</li>
                    <li>Семейные группы капибар состоят из одного доминирующего самца, нескольких самок (около 5-7)
                        и их детенышей.
                    </li>
                    <li>Территория одной группы от 1 до 10 гектаров.</li>
                    <li>В дождливый сезон водосвинки рассредоточены, а в сезон засухи могут собираться стадами до
                        нескольких десятков и даже сотен особей.
                    </li>
                    <li>Между собой капибары общаются с помощью множества различных звуков. Они кудахчут, лают,
                        свистят, хнычут, стучат зубами и так далее.
                    </li>
                </ul>
            </section>
            <section className="row fs-5">
                <h2 className="text-warning mb-4">Где обитает капибара?</h2>
                <p className="mb-3">
                    Распространены капибары в Южной и Центральной Америке от Ориноко до Ла-Платы и от Атлантического
                    океана до предгорий Анд. Встретить капибару можно на территории Венесуэлы, Парагвая, Боливии,
                    Эквадора, Перу, на востоке Колумбии и северо-востоке Аргентины. Не водятся водосвинки в Чили.
                </p>
                <p className="mb-3">
                    В Аргентине, Уругвае и Парагвае водосвинок называют карпинчо, в Бразилии — капивара, в Гайане —
                    ватрас, в Перу — ронсого, в Боливии — капигуара или чигуире, в Перу — рококо, В Колумбии и
                    Венесуэле — ферчо. На языке племени бразильских индейцев тупи капибара означает «<i>поедатель
                    травы</i>».
                </p>
                <p className="mb-3">
                    В Северной Америке капибар можно встретить во Флориде и Калифорнии. Там могут выжить убежавшие
                    из зоопарков или выброшенные частными владельцами звери. Небольшая популяция появилась в
                    Тринидаде. Кстати, в некоторых штатах США содержать капибару в неволе запрещено законодательно.
                </p>
                <div className="mb-4">
                    <img src={capybaraPhoto4} alt="Капибары в стаде" className={`${imgStyle} col-6`}/>
                </div>
                <h3 className="text-warning mb-4">виды капибар:</h3>
                <ol className="mx-5 mb-5 fs-6 text-warning fw-bold">
                    <li>Капибара обыкновенная (<i>Hydrochoerus hydrochaeris</i>) - самый распространенный и известный
                        вид
                    </li>
                    <li>Капибара малая (<i>Hydrochoerus isthmius</i>)</li>
                    <li>Вымершая <i>Hydrochoerus ballesterensis</i></li>
                    <li>Вымершая <i>Hydrochoerus gaylordi</i></li>
                </ol>
            </section>
            <section className="row">
                <h2 className="text-warning mb-5">Общие характеристики видов:</h2>
                <h3 className="text-warning">Капибара обыкновенная:</h3>
                <table className="border border-2 mb-5">
                    <tbody>
                    <tr>
                        <th className="p-3 border text-warning">Вес</th>
                        <td className="p-3 border text-center">От 35 до 66 кг</td>
                        <th className="p-3 border text-warning">Класс</th>
                        <td className="p-3 border text-center">Млекопитающие</td>
                    </tr>
                    <tr>
                        <th className="p-3 border text-warning">длина</th>
                        <td className="p-3 border text-center">От 100 до 130 см</td>
                        <th className="p-3 border text-warning">Отряд</th>
                        <td className="p-3 border text-center">Грызуны</td>
                    </tr>
                    <tr>
                        <th className="p-3 border text-warning">скорость</th>
                        <td className="p-3 border text-center">До 35 км/ч</td>
                        <th className="p-3 border text-warning">Семейство</th>
                        <td className="p-3 border text-center">Свинковые</td>
                    </tr>
                    <tr>
                        <th className="p-3 border text-warning">Продолжительность жизни</th>
                        <td className="p-3 border text-center">От 10 до 12 лет</td>
                        <th className="p-3 border text-warning">Род</th>
                        <td className="p-3 border text-center">Водосвинки</td>
                    </tr>
                    </tbody>
                </table>
                <h3 className="text-warning">Капибара малая:</h3>
                <table className="mb-5">
                    <tbody>
                    <tr>
                        <th className="p-3 border text-warning">Вес</th>
                        <td className="p-3 border text-center">От 30 до 45 кг</td>
                        <th className="p-3 border text-warning">Класс</th>
                        <td className="p-3 border text-center">Млекопитающие</td>
                    </tr>
                    <tr>
                        <th className="p-3 border text-warning">длина</th>
                        <td className="p-3 border text-center">От 60 до 80 см</td>
                        <th className="p-3 border text-warning">Отряд</th>
                        <td className="p-3 border text-center">Грызуны</td>
                    </tr>
                    <tr>
                        <th className="p-3 border text-warning">скорость</th>
                        <td className="p-3 border text-center">До 35 км/ч</td>
                        <th className="p-3 border text-warning">Семейство</th>
                        <td className="p-3 border text-center">Свинковые</td>
                    </tr>
                    <tr>
                        <th className="p-3 border text-warning">Продолжительность жизни</th>
                        <td className="p-3 border text-center">От 10 до 12 лет</td>
                        <th className="p-3 border text-warning">Род</th>
                        <td className="p-3 border text-center">Водосвинки</td>
                    </tr>
                    </tbody>
                </table>
            </section>
            <section className="row fs-5 mb-5">
                <h3 className="text-warning mb-4">Чем питается водосвинка?</h3>
                <p className="mb-5">
                    Питаются капибары водными растениями и корой молодых деревьев. Раньше считалось, что водосвинки
                    могут наносить значительный ущерб плантациям бахчевых, кукурузы, риса и сахарного тростника, но
                    это не так. Как морские свинки и кролики, водосвинки поедают свой кал (копрофагия) для
                    обогащения рациона витаминами группы В и лучшего усвоения клетчатки.
                </p>
                <h3 className="text-warning mb-4">Содержание капибар в домашних условиях</h3>
                <p className="mb-3">
                    Неволю капибары переносят хорошо. Эти звери прекрасно приручаются, в еде не разборчивы,
                    предпочитают свежую сочную траву, фрукты и овощи, едят много. Корма животного происхождения
                    капибарам давать нельзя. В жаркие дни любят валяться в грязи. Для стачивания зубов им необходимо
                    давать ветки деревьев. Животное теплолюбиво и его нельзя содержать на улице при температуре
                    окружающего воздуха ниже 15 градусов Цельсия.
                </p>
                <p className="mb-3">
                    Для содержания капибары необходимо наличие бассейна, в котором капибара проводит около 12 часов
                    в день. При чистке бассейна нельзя использовать химические средства очистки воды. Капибары очень
                    добродушные и компанейские животные, содержать иx желательно парой. Самца для домашнего
                    содержания лучше кастрировать. Водосвинки хорошо поддаются дрессировке, легко приучаются к
                    шлейке и поводку.
                </p>
                <div className="d-flex justify-content-center">
                    <img src={capybaraPhoto5} alt="Капибары в домашних условиях" className={`${imgStyle} col-7`}/>
                </div>
            </section>
            <section className="row mb-5 fs-5">
                <h2 className="text-warning mb-3">Популярность капибар</h2>
                <p className="mb-3">
                    Огромной популярностью пользуются водосвинки в Японии. Первые капибары были завезены в Страну
                    восходящего солнца из Уругвая. Наиболее известными парками, где можно пообщаться с милыми
                    грызунами являются Изу Шаботен, а также бипарк в городе Нагасаки. В Изу Шаботен 1982 году
                    появилась традиция проживания водосвинок в вольерах с горячими источниками (онсенами). Прижилась
                    эта традиция и в других парках Японии, где разводят этих животных. Теперь отдыхающие в горячих
                    источниках капибары стали достопримечательностью Японии. Частенько в воду с отдыхающими зверями
                    бросают азиатские цитрусовые – «Юдзу». Это и перекус, и спа-процедура одновременно (!)
                </p>
                <p className="mb-3">
                    Капибары стали популярны в Японии благодаря популярному персонажу аниме Капибара-сан. Этот
                    аниме-персонаж впервые появился в 2003 году, затем появились мягкие игрушки и множество
                    изображений на одежде, различной сувенирной продукции и так далее. В Японии Капибара-сан не
                    менее популярен, чем Хелло-Китти.
                </p>
                <div className="d-flex justify-content-center">
                    <img src={capybaraPhoto6} alt="Капибара отдыхает в ванночке" className={`${imgStyle} col-8`}/>
                </div>
            </section>
        </>
    );
};

export default About;