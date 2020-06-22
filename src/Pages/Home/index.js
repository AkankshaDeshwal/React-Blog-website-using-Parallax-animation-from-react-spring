import React, { Component } from "react";
import "./style.css";
import BlogList from "../../BlogList";
import Footer from "../../Footer";
import { Parallax, ParallaxLayer } from "react-spring/renderprops-addons";
import Header from "../../Header";
import Background from "../../images/tree.jpg";

class Home extends Component {
  render() {
    return (
      <Parallax pages={2.5} ref={(ref) => (this.parallax = ref)}>
        <ParallaxLayer
          offset={0}
          speed={0}
          factor={3}
          style={{
            backgroundImage: "url(" + Background + ")",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        ></ParallaxLayer>
        <Header />

        <ParallaxLayer offset={0} speed={0.5}>
          <div className="topBox">
            <div className="topBoxInner">Blog Site</div>
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={0.9} speed={1}>
          <div className="container-fluid p-2 blogsDiv">
            <BlogList />
          </div>
          <div className="bg-light aboutUs">
            <h2 style={{ fontFamily: "'El Messiri', sans-serif" }}>About Us</h2>
            <br />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Dolor
              sit amet consectetur adipiscing. Enim lobortis scelerisque
              fermentum dui faucibus. Vitae suscipit tellus mauris a diam
              maecenas. Ornare aenean euismod elementum nisi quis eleifend quam
              adipiscing vitae. Tristique risus nec feugiat in fermentum posuere
              urna nec. Ultrices eros in cursus turpis massa tincidunt. Sit amet
              luctus venenatis lectus. Lectus quam id leo in. Aliquet nec
              ullamcorper sit amet risus nullam eget. Nulla facilisi etiam
              dignissim diam quis enim. Ipsum consequat nisl vel pretium lectus
              quam id. Porttitor leo a diam sollicitudin tempor id eu nisl nunc.
              Dui ut ornare lectus sit amet est. Ultrices tincidunt arcu non
              sodales neque sodales ut etiam sit. In dictum non consectetur a
              erat nam at lectus. Venenatis cras sed felis eget velit aliquet
              sagittis id consectetur. Convallis convallis tellus id interdum
              velit. Eu volutpat odio facilisis mauris sit. Quam vulputate
              dignissim suspendisse in est ante in nibh mauris. Tempus imperdiet
              nulla malesuada pellentesque. Odio eu feugiat pretium nibh ipsum
              consequat nisl. Vivamus at augue eget arcu dictum varius duis at.
              Euismod in pellentesque massa placerat duis. Morbi blandit cursus
              risus at ultrices mi. Semper risus in hendrerit gravida rutrum.
              Elementum nibh tellus molestie nunc non blandit. Eget gravida cum
              sociis natoque penatibus et magnis dis parturient. Neque laoreet
              suspendisse interdum consectetur libero id. In hendrerit gravida
              rutrum quisque non tellus orci ac. Neque laoreet suspendisse
              interdum consectetur libero id. Sit amet mattis vulputate enim
              nulla aliquet porttitor lacus. Cras sed felis eget velit.
              Adipiscing enim eu turpis egestas pretium aenean pharetra magna.
              Dolor magna eget est lorem ipsum dolor sit amet. Eu turpis egestas
              pretium aenean pharetra magna ac placerat vestibulum. Aliquam
              malesuada bibendum arcu vitae. Orci dapibus ultrices in iaculis
              nunc sed augue. Pretium lectus quam id leo in vitae turpis massa
              sed. Sociis natoque penatibus et magnis dis parturient montes.
              Risus nullam eget felis eget nunc lobortis mattis aliquam. Eget
              nunc scelerisque viverra mauris in aliquam sem. In hendrerit
              gravida rutrum quisque non tellus orci ac. Orci porta non pulvinar
              neque laoreet suspendisse interdum. Accumsan in nisl nisi
              scelerisque eu ultrices vitae auctor eu. Molestie nunc non blandit
              massa enim nec dui. Laoreet non curabitur gravida arcu. At auctor
              urna nunc id cursus metus aliquam. Nibh tellus molestie nunc non
              blandit. Tortor at auctor urna nunc id cursus metus. Tempus
              iaculis urna id volutpat lacus laoreet non curabitur gravida. Amet
              aliquam id diam maecenas ultricies mi. Accumsan sit amet nulla
              facilisi morbi tempus iaculis. Platea dictumst vestibulum rhoncus
              est pellentesque elit ullamcorper. Luctus venenatis lectus magna
              fringilla urna porttitor rhoncus. Ipsum consequat nisl vel
              pretium. Leo integer malesuada nunc vel risus commodo viverra
              maecenas accumsan. Turpis cursus in hac habitasse platea dictumst
              quisque sagittis purus. Risus nec feugiat in fermentum posuere
              urna nec tincidunt praesent. Egestas tellus rutrum tellus
              pellentesque eu tincidunt tortor aliquam nulla. Eu turpis egestas
              pretium aenean pharetra magna ac. Purus faucibus ornare
              suspendisse sed nisi lacus sed. Ultrices gravida dictum fusce ut
              placerat orci nulla. At tempor commodo ullamcorper a lacus
              vestibulum sed arcu non. Bibendum enim facilisis gravida neque.
              Lacus sed viverra tellus in hac habitasse platea. Amet porttitor
              eget dolor morbi non arcu. Lacus viverra vitae congue eu. Et
              egestas quis ipsum suspendisse ultrices. Tincidunt id aliquet
              risus feugiat in. Risus sed vulputate odio ut. Leo a diam
              sollicitudin tempor. Et sollicitudin ac orci phasellus egestas
              tellus rutrum tellus. Id donec ultrices tincidunt arcu non sodales
              neque sodales ut. Sed vulputate odio ut enim blandit. At varius
              vel pharetra vel.
            </p>
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={2.37} speed={0}>
          <Footer />
        </ParallaxLayer>
      </Parallax>
    );
  }
}

export default Home;
