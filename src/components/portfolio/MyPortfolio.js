import React from "react";

export default 
function MyPortfolio(props){
  return (


<section className="section" id="portfolio">
    <div className="container">
      <div className="section-heading">
        <h3 className="title is-2">Portfolio</h3>
        <h4 className="subtitle is-5">My latest works</h4>
      </div>
      <br />
      <div className="container portfolio-container">
        <div className="columns">
          <div className="column is-4">
            {/* admin */}
            <div className="card">
              <header className="card-header">
                <p className="card-header-title">
                  <span>Admin <small>(Light)</small></span>
                  <span className="is-pulled-right">
                    <a href="https://github.com/jgthms/bulma/releases/tag/0.7.2">
                      <span className="tag is-default">v0.7.2</span>
                    </a>
                    <span className="tag is-default">Desktop</span>
                    <span className="tag is-danger">WIP</span>
                  </span>
                </p>
              </header>
              <div className="card-content">
                <figure className="image">
                  <img src="../images/admin.png" alt="Admin template screenshot" />
                </figure>
              </div>
              <footer className="card-footer">
                <a href="templates/admin.html" className="card-footer-item">Preview</a>
                <a href="https://github.com/BulmaTemplates/bulma-templates/blob/master/templates/admin.html" className="card-footer-item">Source
                  Code</a>
              </footer>
            </div>
            {/* cards */}
            <div className="card">
              <header className="card-header">
                <p className="card-header-title">
                  <span>Cards</span>
                  <span className="is-pulled-right">
                    <a href="https://github.com/jgthms/bulma/releases/tag/0.7.2">
                      <span className="tag is-default">v0.7.2</span>
                    </a>
                    <span className="tag is-default">Desktop</span>
                    <span className="tag is-default">?</span>
                  </span>
                </p>
              </header>
              <div className="card-content">
                <figure className="image">
                  <img src="../images/cards.png" alt="Cards template screenshot" />
                </figure>
              </div>
              <footer className="card-footer">
                <a href="templates/cards.html" className="card-footer-item">Preview</a>
                <a href="https://github.com/BulmaTemplates/bulma-templates/blob/master/templates/cards.html" className="card-footer-item">Source
                  Code</a>
              </footer>
            </div>
            {/* forum */}
            <div className="card">
              <header className="card-header">
                <p className="card-header-title">
                  <span>Forum</span>
                  <span className="is-pulled-right">
                    <a href="https://github.com/jgthms/bulma/releases/tag/0.7.2">
                      <span className="tag is-default">v0.7.2</span>
                    </a>
                    <span className="tag is-default">Desktop</span>
                    <span className="tag is-default">Mobile</span>
                  </span>
                </p>
              </header>
              <div className="card-content">
                <figure className="image">
                  <img src="../images/forum.png" alt="Hero template screenshot" />
                </figure>
              </div>
              <footer className="card-footer">
                <a href="templates/forum.html" className="card-footer-item">Preview</a>
                <a href="https://github.com/BulmaTemplates/bulma-templates/blob/master/templates/forum.html" className="card-footer-item">Source
                  Code</a>
              </footer>
            </div>
            {/* insta album */}
            <div className="card">
              <header className="card-header">
                <p className="card-header-title">
                  <span>InstaAlbum</span>
                  <span className="is-pulled-right">
                    <a href="https://github.com/jgthms/bulma/releases/tag/0.7.2">
                      <span className="tag is-default">v0.7.2</span>
                    </a>
                    <span className="tag is-default">Desktop</span>
                    <span className="tag is-default">Mobile</span>
                  </span>
                </p>
              </header>
              <div className="card-content">
                <figure className="image">
                  <img src="../images/instaalbum.png" alt="Landing template screenshot" />
                </figure>
              </div>
              <footer className="card-footer">
                <a href="templates/instaAlbum.html" className="card-footer-item">Preview</a>
                <a href="https://github.com/BulmaTemplates/bulma-templates/blob/master/templates/instaAlbum.html" className="card-footer-item">Source
                  Code</a>
              </footer>
            </div>
            {/* landing */}
            <div className="card">
              <header className="card-header">
                <p className="card-header-title">
                  <span>Landing</span>
                  <span className="is-pulled-right">
                    <a href="https://github.com/jgthms/bulma/releases/tag/0.7.2">
                      <span className="tag is-default">v0.7.2</span>
                    </a>
                    <span className="tag is-default">Desktop</span>
                    <span className="tag is-default">Mobile</span>
                  </span>
                </p>
              </header>
              <div className="card-content">
                <figure className="image">
                  <img src="../images/landing.png" alt="Landing template screenshot" />
                </figure>
              </div>
              <footer className="card-footer">
                <a href="templates/landing.html" className="card-footer-item">Preview</a>
                <a href="https://github.com/BulmaTemplates/bulma-templates/blob/master/templates/landing.html" className="card-footer-item">Source
                  Code</a>
              </footer>
            </div>
          </div>
          <div className="column is-4">
            {/* band */}
            <div className="card">
              <header className="card-header">
                <p className="card-header-title">
                  <span>Band</span>
                  <span className="is-pulled-right">
                    <a href="https://github.com/jgthms/bulma/releases/tag/0.7.2">
                      <span className="tag is-default">v0.7.2</span>
                    </a>
                    <span className="tag is-default">Desktop</span>
                    <span className="tag is-default">?</span>
                  </span>
                </p>
              </header>
              <div className="card-content">
                <figure className="image">
                  <img src="../images/band.png" alt="Band template screenshot" />
                </figure>
              </div>
              <footer className="card-footer">
                <a href="templates/band.html" className="card-footer-item">Preview</a>
                <a href="https://github.com/BulmaTemplates/bulma-templates/blob/master/templates/band.html" className="card-footer-item">Source
                  Code</a>
              </footer>
            </div>
            {/* cheatsheet */}
            <div className="card">
              <header className="card-header">
                <p className="card-header-title">
                  <span>Cheatsheet</span>
                  <span className="is-pulled-right">
                    <a href="https://github.com/jgthms/bulma/releases/tag/0.7.2">
                      <span className="tag is-default">v0.7.2</span>
                    </a>
                    <span className="tag is-default">Desktop</span>
                    <span className="tag is-default">?</span>
                  </span>
                </p>
              </header>
              <div className="card-content">
                <figure className="image">
                  <img src="https://dummyimage.com/555x255/000/fff" alt="Cheatsheet template screenshot" />
                </figure>
              </div>
              <footer className="card-footer">
                <a href="templates/cheatsheet.html" className="card-footer-item">Preview</a>
                <a href="https://github.com/BulmaTemplates/bulma-templates/blob/master/templates/cheatsheet.html" className="card-footer-item">Source
                  Code</a>
              </footer>
            </div>
            {/* hero */}
            <div className="card">
              <header className="card-header">
                <p className="card-header-title">
                  <span>Hero</span>
                  <span className="is-pulled-right">
                    <a href="https://github.com/jgthms/bulma/releases/tag/0.7.2">
                      <span className="tag is-default">v0.7.2</span>
                    </a>
                    <span className="tag is-default">Desktop</span>
                    <span className="tag is-default">?</span>
                  </span>
                </p>
              </header>
              <div className="card-content">
                <figure className="image">
                  <img src="../images/hero.png" alt="Hero template screenshot" />
                </figure>
              </div>
              <footer className="card-footer">
                <a href="templates/hero.html" className="card-footer-item">Preview</a>
                <a href="https://github.com/BulmaTemplates/bulma-templates/blob/master/templates/hero.html" className="card-footer-item">Source
                  Code</a>
              </footer>
            </div>
            {/*kanban */}
            <div className="card">
              <header className="card-header">
                <p className="card-header-title">
                  <span>Kanban</span>
                  <span className="is-pulled-right">
                    <a href="https://github.com/jgthms/bulma/releases/tag/0.7.2">
                      <span className="tag is-default">v0.7.2</span>
                    </a>
                    <span className="tag is-default">Desktop</span>
                    <span className="tag is-default">?</span>
                  </span>
                </p>
              </header>
              <div className="card-content">
                <figure className="image">
                  <img src="../images/kanban.png" alt="Kanban template screenshot" />
                </figure>
              </div>
              <footer className="card-footer">
                <a href="templates/kanban.html" className="card-footer-item">Preview</a>
                <a href="https://github.com/BulmaTemplates/bulma-templates/blob/master/templates/kanban.html" className="card-footer-item">Source
                  Code</a>
              </footer>
            </div>
            {/* login */}
            <div className="card">
              <header className="card-header">
                <p className="card-header-title">
                  <span>Login</span>
                  <span className="is-pulled-right">
                    <a href="https://github.com/jgthms/bulma/releases/tag/0.7.2">
                      <span className="tag is-default">v0.7.2</span>
                    </a>
                    <span className="tag is-default">Desktop</span>
                    <span className="tag is-default">Mobile</span>
                  </span>
                </p>
              </header>
              <div className="card-content">
                <figure className="image">
                  <img src="../images/login.png" alt="Login template screenshot" />
                </figure>
              </div>
              <footer className="card-footer">
                <a href="templates/login.html" className="card-footer-item">Preview</a>
                <a href="https://github.com/BulmaTemplates/bulma-templates/blob/master/templates/login.html" className="card-footer-item">Source
                  Code</a>
              </footer>
            </div>
          </div>
          <div className="column is-4">
            {/* blog */}
            <div className="card">
              <header className="card-header">
                <p className="card-header-title">
                  <span>Blog</span>
                  <span className="is-pulled-right">
                    <a href="https://github.com/jgthms/bulma/releases/tag/0.7.2">
                      <span className="tag is-default">v0.7.2</span>
                    </a>
                    <span className="tag is-default">Desktop</span>
                    <span className="tag is-danger">WIP</span>
                  </span>
                </p>
              </header>
              <div className="card-content">
                <figure className="image">
                  <img src="../images/blog.png" alt="Blog template screenshot" />
                </figure>
              </div>
              <footer className="card-footer">
                <a href="templates/blog.html" className="card-footer-item">Preview</a>
                <a href="https://github.com/BulmaTemplates/bulma-templates/blob/master/templates/blog.html" className="card-footer-item">Source
                  Code</a>
              </footer>
            </div>
            {/* cover */}
            <div className="card">
              <header className="card-header">
                <p className="card-header-title">
                  <span>Cover</span>
                  <span className="is-pulled-right">
                    <a href="https://github.com/jgthms/bulma/releases/tag/0.7.2">
                      <span className="tag is-default">v0.7.2</span>
                    </a>
                    <span className="tag is-default">Desktop</span>
                    <span className="tag is-default">Mobile</span>
                  </span>
                </p>
              </header>
              <div className="card-content">
                <figure className="image">
                  <img src="../images/cover.png" alt="Cover template screenshot" />
                </figure>
              </div>
              <footer className="card-footer">
                <a href="templates/cover.html" className="card-footer-item">Preview</a>
                <a href="https://github.com/BulmaTemplates/bulma-templates/blob/master/templates/cover.html" className="card-footer-item">Source
                  Code</a>
              </footer>
            </div>
            {/*inbox */}
            <div className="card">
              <header className="card-header">
                <p className="card-header-title">
                  <span>Inbox</span>
                  <span className="is-pulled-right">
                    <a href="https://github.com/jgthms/bulma/releases/tag/0.7.2">
                      <span className="tag is-default">v0.7.2</span>
                    </a>
                    <span className="tag is-default">Desktop</span>
                    <span className="tag is-default">Mobile</span>
                  </span>
                </p>
              </header>
              <div className="card-content">
                <figure className="image">
                  <img src="../images/inbox.png" alt="Inbox template screenshot" />
                </figure>
              </div>
              <footer className="card-footer">
                <a href="templates/inbox.html" className="card-footer-item">Preview</a>
                <a href="https://github.com/BulmaTemplates/bulma-templates/blob/master/templates/inbox.html" className="card-footer-item">Source
                  Code</a>
              </footer>
            </div>
            {/*kanban with functional search*/}
            <div className="card">
              <header className="card-header">
                <p className="card-header-title">
                  <span>Kanban with Search box</span>
                  <span className="is-pulled-right">
                    <a href="https://github.com/jgthms/bulma/releases/tag/0.7.2">
                      <span className="tag is-default">v0.7.2</span>
                    </a>
                    <span className="tag is-default">Desktop</span>
                    <span className="tag is-default">?</span>
                  </span>
                </p>
              </header>
              <div className="card-content">
                <figure className="image">
                  <img src="../images/kanban2.png" alt="Kanban template screenshot" />
                </figure>
              </div>
              <footer className="card-footer">
                <a href="templates/kanban[search].html" className="card-footer-item">Preview</a>
                <a href="https://github.com/BulmaTemplates/bulma-templates/blob/master/templates/kanban[search].html" className="card-footer-item">Source
                  Code</a>
              </footer>
            </div>
            {/*tabs*/}
            <div className="card">
              <header className="card-header">
                <p className="card-header-title">
                  <span>Modal Cards</span>
                  <span className="is-pulled-right">
                    <a href="https://github.com/jgthms/bulma/releases/tag/0.7.2">
                      <span className="tag is-default">v0.7.2</span>
                    </a>
                    <span className="tag is-default">Desktop</span>
                    <span className="tag is-default">?</span>
                  </span>
                </p>
              </header>
              <div className="card-content">
                <figure className="image">
                  <img src="https://dummyimage.com/555x255/000/fff" alt="modal-cards template screenshot" />
                </figure>
              </div>
              <footer className="card-footer">
                <a href="templates/modal-cards.html" className="card-footer-item">Preview</a>
                <a href="https://github.com/BulmaTemplates/bulma-templates/blob/master/templates/modal-cards.html" className="card-footer-item">Source
                  Code</a>
              </footer>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )};
            
  {/* <section class="section">
        <nav class="level">
          <div class="level-item has-text-centered">
            <div>
              <p class="heading">Tweets</p>
              <p class="title">3,456</p>
            </div>
          </div>
          <div class="level-item has-text-centered">
            <div>
              <p class="heading">Following</p>
              <p class="title">123</p>
            </div>
          </div>
          <div class="level-item has-text-centered">
            <div>
              <p class="heading">Followers</p>
              <p class="title">456K</p>
            </div>
          </div>
          <div class="level-item has-text-centered">
            <div>
              <p class="heading">Likes</p>
              <p class="title">789</p>
            </div>
          </div>
        </nav>
      </section> */}