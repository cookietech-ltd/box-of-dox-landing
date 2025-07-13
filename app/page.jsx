import Footer4 from "@/components/footers/Footer4";
import Header2 from "@/components/headers/Header2";
import Home4 from "@/components/homes/home-4";
import Hero1Dark from "@/components/homes/home-4/heros/Hero1Dark";
import { corporateMultipageDark } from "@/data/menu";

export const metadata = {
  title:
    "Box Of Dox",
  description:
    "Trusted by legal professionals to uncover the full value of every injury claim",
};
export default function Home4MainDemoMultiPageDark() {
  return (
    <>
      <div className="theme-corporate">
        <div className="dark-mode">
          <div className="page bg-dark-1" id="top">
            <nav className="main-nav dark dark-mode transparent sticky wow-menubar wch-unset">
              <Header2 links={corporateMultipageDark} />
            </nav>

            <main id="main">
              <section
                className="page-section bg-dark-1 light-content scrollSpysection"
                id="home"
              >
                <Hero1Dark />
              </section>

              <Home4 dark />
            </main>
            <footer className="footer-2 bg-dark-1 light-content pb-50">
              <Footer4 />
            </footer>
          </div>{" "}
        </div>{" "}
      </div>
    </>
  );
}
