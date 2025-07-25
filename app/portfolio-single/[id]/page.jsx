import AnimatedText from "@/components/common/AnimatedText";
import Footer4 from "@/components/footers/Footer4";
import Header2 from "@/components/headers/Header2";
import Link from "next/link";
import Image from "next/image";
import { corporateMultipage, corporateMultipageDark } from "@/data/menu";

import RelatedProjects7 from "@/components/portfolio/relatedProjects/RelatedProjects7";
import { allPortfolios } from "@/data/portfolio";
export const metadata = {
  title:
    "Box Of Dox",
  description:
    "Trusted by legal professionals to uncover the full value of every injury claim",
};
export default async function CorporatePortfolioSinglePageDark(props) {
  const params = await props.params;
  const portfolioItem =
    allPortfolios.filter((elm) => elm.id == params.id)[0] || allPortfolios[0];
  return (
    <>
      <div className="theme-corporate">
        <div className="dark-mode">
          <div className="page bg-dark-1" id="top">
            <nav className="main-nav dark dark-mode transparent stick-fixed wow-menubar wch-unset">
              <Header2 links={corporateMultipageDark} />
            </nav>

            <main id="main">
              <section className="page-section bg-dark-1 bg-gradient-gray-dark-1 light-content bg-scroll overflow-hidden">
                {/* Background Shape */}
                <div className="bg-shape-1 wow fadeIn">
                  <Image
                    className="opacity-003"
                    src="/assets/images/demo-corporate/bg-shape-1.svg"
                    alt=""
                    width={1443}
                    height={844}
                  />
                </div>
                {/* End Background Shape */}
                <div className="container position-relative pt-10 pt-sm-40 pb-80 pb-sm-20 text-center">
                  <div className="row">
                    <div className="col-lg-10 offset-lg-1">
                      <h1 className="hs-title-9 mb-20">
                        <span
                          className="wow charsAnimIn"
                          data-splitting="chars"
                        >
                          <AnimatedText text={portfolioItem.title} />
                        </span>
                      </h1>

                      <div
                        className="hs-descr mt-n10 mb-0 wow fadeIn"
                        data-wow-delay="0.2s"
                      >
                        <div className="d-inline-block mt-10 mx-2">
                          <i className="mi-check color-primary-1"></i> Media
                          Relations
                        </div>
                        <div className="d-inline-block mt-10 mx-2">
                          <i className="mi-check color-primary-1"></i> Online
                          Advertising
                        </div>
                        <div className="d-inline-block mt-10 mx-2">
                          <i className="mi-check color-primary-1"></i> Social
                          Media
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <>
                {/* Section */}
                <section className="page-section light-content pt-0">
                  <div className="container position-relative">
                    <div className="mt-n120 mt-sm-n60 mb-80 mb-sm-60 round overflow-hidden">
                      <Image
                        src="/assets/images/demo-corporate/portfolio/project-large.jpg"
                        alt="Image Description"
                        width={1700}
                        height={957}
                        className="wow scaleOutIn"
                        data-wow-duration="1.2s"
                        data-wow-offset={0}
                      />
                    </div>
                    <div className="row">
                      {/* Project Details */}
                      <div className="col-md-6 mb-sm-40">
                        <h2 className="h3 mb-20">Project Details</h2>
                        <hr className="mb-20" />
                        <div className="row">
                          <div className="col-sm-4">
                            <b>Date:</b>
                          </div>
                          <div className="col-sm-8">May 1th, 2023</div>
                        </div>
                        <hr className="mb-20" />
                        <div className="row">
                          <div className="col-sm-4">
                            <b>Client:</b>
                          </div>
                          <div className="col-sm-8">Envato Users</div>
                        </div>
                        <hr className="mb-20" />
                        <div className="row">
                          <div className="col-sm-4">
                            <b>Services:</b>
                          </div>
                          <div className="col-sm-8">
                            Branding, UI/UX Design, Front-end Development,
                            Back-end Development
                          </div>
                        </div>
                        <hr className="mb-20" />
                      </div>
                      {/* End Project Details */}
                      {/* Project Description */}
                      <div className="col-md-6">
                        <h2 className="h3 mb-20">Description</h2>
                        <hr className="mb-20" />
                        <p className="mb-0">
                          Lorem ipsum dolor sit amet conseur adipisci inerene
                          maximus ligula sempe metuse pelente mattis. Maecenas
                          volutpat, diam eni sagittis quam porta quam. Sed id
                          dolor consectetur fermentum volutpat accumsan purus
                          iaculis libero. Donec vel ultricies purus iaculis
                          libero. Etiam sit amet fringilla lacus susantebe sit
                          ullamcorper pulvinar neque porttitor. Integere lectus.
                          Praesent sede nisi eleifend fermum orci amet, iaculis
                          libero. Donec vel ultricies purus quam. Pellentesque
                          habitant morbi tristique senectus et netus et
                          malesuada fames ac turpis egestas.
                        </p>
                      </div>
                      {/* End Project Description */}
                    </div>
                  </div>
                </section>
                {/* End Section */}
                {/* Achievements Section */}
                <section
                  className="page-section bg-dark-1 bg-dark-alpha-90 light-content bg-scroll"
                  style={{
                    backgroundImage:
                      "url(/assets/images/demo-slick/section-bg-1.jpg)",
                  }}
                >
                  <div className="container position-relative">
                    <div className="row">
                      <div className="col-lg-4 mb-md-60 mb-xs-50">
                        <h2 className="section-title mb-20 wow fadeInUp">
                          Check project achievements.
                        </h2>
                        <p
                          className="section-descr mb-0 wow fadeInUp"
                          data-wow-delay="0.1s"
                        >
                          We provide the effective ideas that grow businesses of
                          our clients.
                        </p>
                      </div>
                      <div className="col-lg-7 offset-lg-1">
                        {/* Numbers Grid */}
                        <div className="row mt-n50 mt-xs-n30">
                          {/* Number Item */}
                          <div
                            className="col-sm-6 col-lg-5 mt-50 mt-xs-30 wow fadeScaleIn"
                            data-wow-delay="0.4s"
                          >
                            <div className="number-title color-primary-1 mb-10">
                              28%
                            </div>
                            <div className="number-descr black">
                              Resent tincidunt lacus sedenim posuere posuere
                              nulla acusan.
                            </div>
                          </div>
                          {/* End Number Item */}
                          {/* Number Item */}
                          <div
                            className="col-sm-6 col-lg-5 offset-lg-2 mt-50 mt-xs-30 wow fadeScaleIn"
                            data-wow-delay="0.6s"
                          >
                            <div className="number-title color-primary-1 mb-10">
                              1.5k
                            </div>
                            <div className="number-descr black">
                              Curabitur eu quam auctor nuca convallis metus nec
                              feugia.
                            </div>
                          </div>
                          {/* End Number Item */}
                          {/* Number Item */}
                          <div
                            className="col-sm-6 col-lg-5 mt-50 mt-xs-30 wow fadeScaleIn"
                            data-wow-delay="0.8s"
                          >
                            <div className="number-title color-primary-1 mb-10">
                              30+
                            </div>
                            <div className="number-descr black">
                              Pellentesque pharetra libero eget vestibulum
                              ullamcorper.
                            </div>
                          </div>
                          {/* End Number Item */}
                          {/* Number Item */}
                          <div
                            className="col-sm-6 col-lg-5 offset-lg-2 mt-50 mt-xs-30 wow fadeScaleIn"
                            data-wow-delay="1s"
                          >
                            <div className="number-title color-primary-1 mb-10">
                              2x
                            </div>
                            <div className="number-descr black">
                              Suspendisse a scelerisque vitae rutrum posuere sec
                              lacus.
                            </div>
                          </div>
                          {/* End Number Item */}
                        </div>
                        {/* End Numbers Grid */}
                      </div>
                    </div>
                  </div>
                </section>
                {/* End Achievements Section */}
                {/* Section */}
                <section className="page-section bg-dark-1 light-content">
                  <div className="container position-relative">
                    <div className="row">
                      <div className="col-md-10 offset-md-1 col-lg-8 offset-lg-2">
                        <h2 className="h3">Challenge</h2>
                        <p>
                          Pellentesque habitant morbi tristique senectus et
                          netus et malesuada fames ac turpis egestas. Duis non
                          maximus justo, nec porta diam. Pellentesque pharetra
                          ex vel sem aliquam, in posuere quam volutpat. Fusce
                          non posuere dui. Proin vel tellus bibendum lorem
                          vulputate lobortis ac at purus. Proin tempus dui
                          ipsum, sed eleifend dolor volutpat vitae.
                        </p>
                        <h2 className="h3">Conclusiouns</h2>
                        <p className="mb-0">
                          Phasellus quam lorem, sollicitudin eget iaculis vitae,
                          porta a nulla. Duis tristique id massa non egestas.
                          Vivamus mattis porttitor neque eget suscipit. Morbi
                          ultricies diam non egestas consectetur. Nunc leo
                          risus, lobortis ac eros molestie, blandit eleifend
                          erat. Etiam vehicula nibh quis rutrum commodo.
                          Vestibulum nunc nibh, gravida non est vel, dictum
                          tristique eros.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>
                {/* End Section */}
                {/* Divider */}
                <hr className="mt-0 mb-0 white" />
                {/* End Divider */}
                {/* Work Navigation */}
                <div className="work-navigation clearfix bg-dark-1 light-content">
                  <Link
                    href={`/main-portfolio-single-1/1`}
                    className="work-prev"
                  >
                    <span>
                      <i className="mi-arrow-left size-24 align-middle color-primary-1" />
                      Previous
                    </span>
                  </Link>
                  <a href="#" className="work-all">
                    <span>
                      <i className="mi-close size-24 align-middle color-primary-1" />{" "}
                      All works
                    </span>
                  </a>
                  <Link
                    href={`/main-portfolio-single-3/1`}
                    className="work-next"
                  >
                    <span>
                      Next
                      <i className="mi-arrow-right size-24 align-middle color-primary-1" />
                    </span>
                  </Link>
                </div>
                {/* End Work Navigation */}
                {/* Divider */}
                <hr className="mt-0 mb-0 white" />
                {/* End Divider */}
              </>
              <section className="page-section bg-dark-1 light-content">
                <RelatedProjects7 />
              </section>
            </main>
            <hr className="mt-0 mb-0" />
            <footer className="footer-2 bg-dark-1 light-content pb-50">
              <Footer4 />
            </footer>
          </div>{" "}
        </div>
      </div>
    </>
  );
}
