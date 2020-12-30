import Div100vh from 'react-div-100vh'
import styles from './index.module.css';

function Link({
  external = false,
  href,
  children,
  className
}: {
  external?: boolean;
  href: string;
  children?: React.ReactChild;
  className?: string;
}) {
  return (
    <a 
    className={className}
      href={href}
      rel={external ? 'noopener nofollow' : ''}
    >
      {children}
    </a>
  );
}

function App() {
  return (
    <>
      <Div100vh>
        <div className={styles.app}>
          <div className={styles.page}>
            <header className={styles.layout}>
              <img 
                alt="Profile"
                className={styles.profilePicture}
                src='https://i.imgur.com/iHXeY1G.jpg'
              />
              <div>
                <span>Christian Juth</span>
                <h1>Full stack developer</h1>
              </div>
            </header>

            <div 
              className={styles.spacer}
            />

            <main className={styles.layout}>
              <aside>
                <h2>Projects</h2>
                <ul>
                  <li>
                    {'🎾 '}
                    <Link href="//breakthelove.com" external>
                      Break the Love
                    </Link>
                  </li>

                  <li>
                    {'🗞️ '}
                    <Link href="//breakthelove.com" external>
                      The Daily Targum
                    </Link>
                  </li>

                  
                </ul>
              </aside>
              <article>
                <h2>Background</h2>
                <p>Comedian and actor Jim Carrey was born in Newmarket, Ontario, Canada, on January 17, 1962. Carrey relocated to Los Angeles to pursue comedy, eventually landing a spot on the sketch comedy show In Living Color. He went on to huge box office success in comedies, including Ace Ventura: Pet Detective and The Mask, and delivered acclaimed dramatic performances in The Truman Show, Man on the Moon, and Eternal Sunshine of the Spotless Mind. His later films include Kick Ass 2 and Dumb and Dumber To.</p>
                <Link
                  href="mailto:jim"
                />
              </article>
            </main>
          </div>
        </div>
      </Div100vh>
      <style jsx global>
        {`
          body {
            margin: 0;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
              'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
              sans-serif;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
          }
          
          code {
            font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
              monospace;
          }
          
          @media (prefers-color-scheme: dark) {
            html,
            body {
              background-color: #000;
            }
          
            * {
              color: #fff;
            }
          }
        `}
      </style>
    </>
  );
}

export default App;