import capybaraPic from '../../assets/img/capybara-pic-1.jpg';
import {useNavigate} from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const imageStyle = 'w-100 rounded border-warning border';

  return (
    <>
      <article className="row d-flex justify-content-center align-items-center mb-4">
        <h1 className="text-warning">Capybaras</h1>
        <div className="col-3"><img src={capybaraPic} className={imageStyle} alt="Capybara"/></div>
        <div className="col-3"><img src={capybaraPic} className={imageStyle} alt="Capybara"/></div>
        <div className="col-3"><img src={capybaraPic} className={imageStyle} alt="Capybara"/></div>
        <h3 className="my-4 text-warning">Capybaras</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque aut corporis dolor doloremque
          excepturi
          fuga ipsa labore porro provident unde? Dolores est facilis hic, iste magni molestiae nam sed
          veritatis?
          Accusantium aperiam beatae, culpa cumque eius enim facere inventore ipsa magni possimus quaerat quod
          ratione rerum similique sit velit voluptatibus.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque aut corporis dolor doloremque
          excepturi
          fuga ipsa labore porro provident unde? Dolores est facilis hic, iste magni molestiae nam sed
          veritatis?
          Accusantium aperiam beatae, culpa cumque eius enim facere inventore ipsa magni possimus quaerat quod
          ratione rerum similique sit velit voluptatibus.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque aut corporis dolor doloremque
          excepturi
          fuga ipsa labore porro provident unde? Dolores est facilis hic, iste magni molestiae nam sed
          veritatis?
          Accusantium aperiam beatae, culpa cumque eius enim facere inventore ipsa magni possimus quaerat quod
          ratione rerum similique sit velit voluptatibus:</p>
        <ul className="col-10 fs-5 text-warning">
          <li>Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet.</li>
          <li>Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto
            assumenda corporis debitis deserunt eum id inventore nemo omnis porro voluptas..
          </li>
          <li>Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Laboriosam, quaerat?
          </li>
        </ul>
      </article>
      <div className="row align-items-baseline mb-5">
        <h4 className="text-warning">Интересные факты:</h4>
        <ol className="mx-5 col-10 fs-5 text-warning">
          <li>Водосвинки замечательно плавают.</li>
          <li>Семейные группы капибар состоят из одного доминирующего самца, нескольких самок (около 5-7) и их
            детенышей.
          </li>
          <li>Территория одной группы от 1 до 10 гектаров.</li>
          <li>В дождливый сезон водосвинки рассредоточены, а в сезон засухи могут собираться стадами до
            нескольких десятков и даже сотен особей.
          </li>
          <li>Между собой капибары общаются с помощью множества различных звуков. Они кудахчут, лают, свистят,
            хнычут, стучат зубами и так далее.
          </li>
        </ol>
        <div>
          <button
            onClick={() => navigate('/about')}
            className="btn btn-warning text-white fs-5 px-5"
          >
            {'> Подробнее...'}
          </button>
        </div>
      </div>
    </>
  );
};

export default Home;