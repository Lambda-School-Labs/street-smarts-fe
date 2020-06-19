import React from "react";
import ArticleStyled from "./styles";

const CO2 = () => {

  return (
    <ArticleStyled>
      <section className='hero' style={{ backgroundImage: `url(require("src/assets/images/deva-darshan-2XUfjLp7HYY-unsplash.jpg"))` }}>
        <div className='hero-text'>
          <h1>What is CO<sub>2</sub>?</h1>
          <h3>Fuel-efficient driving techniques</h3>
        </div>
      </section>

      <section className='article-text'>
        <div class='visually_embed'>
          <img class='visually_embed_infographic' src='https://visual.ly/node/image/1411?_w=800' alt='Automobiles and the Environment' />
          <div class='visually_embed_cycle'></div>
          <script type='text/javascript' src='https://a.visual.ly/api/embed/1411?width=800' class='visually_embed_script' id='visually_embed_script_1411'></script>
          <p> From <a href='https://visual.ly?utm_source=content-embed&utm_medium=embed'>Visually</a>.</p>
        </div>
      </section>
    </ArticleStyled>
  );
};

export default CO2;