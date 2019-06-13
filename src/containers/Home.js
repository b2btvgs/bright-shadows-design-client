import React, { Component } from "react";
import { API } from "aws-amplify";
import { Link } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import { PageHeader, ListGroup, ListGroupItem } from "react-bootstrap";
import "./Home.css";

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      artworks: []
    };
  }

  async componentDidMount() {
    if (!this.props.isAuthenticated) {
      return;
    }

    try {
      const artworks = await this.artworks();
      this.setState({ artworks });
    } catch (e) {
      alert(e);
    }

    this.setState({ isLoading: false });
  }

  artworks() {
    return API.get("artworks", "/artworks");
  }

  renderartworksList(artworks) {
    return [{}].concat(artworks).map((artwork, i) =>
      i !== 0 ? (
        <LinkContainer
          key={artwork.artworkId}
          to={`/artworks/${artwork.artworkId}`}
        >
          <ListGroupItem header={artwork.content.trim().split("\n")[0]}>
            {"Created: " + new Date(artwork.createdAt).toLocaleString()}
          </ListGroupItem>
        </LinkContainer>
      ) : (
        <LinkContainer key="new" to="/artworks/new">
          <ListGroupItem>
            <h4>
              <b>{"\uFF0B"}</b> Create a new artwork
            </h4>
          </ListGroupItem>
        </LinkContainer>
      )
    );
  }

  renderLander() {
    return (
      <div className="lander">
        <h1>Scratch</h1>
        <p>A simple artwork taking app</p>
        <div>
          <Link to="/login" className="btn btn-info btn-lg">
            Login
          </Link>
          <Link to="/signup" className="btn btn-success btn-lg">
            Signup
          </Link>
        </div>
      </div>
    );
  }

  renderartworks() {
    return (
      <div className="artworks">
        <PageHeader>Your artworks</PageHeader>
        <ListGroup>
          {!this.state.isLoading &&
            this.renderartworksList(this.state.artworks)}
        </ListGroup>
      </div>
    );
  }

  render() {
    return (
      <div className="Home">
        {this.props.isAuthenticated
          ? this.renderartworks()
          : this.renderLander()}
      </div>
    );
  }
}
