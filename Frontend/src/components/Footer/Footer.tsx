import React from 'react';


class Footer extends React.Component {




    render() {
      return (
        <footer>

        <div className="footer-area section-bg" data-background="assets/img/gallery/footer_bg.png">
            <div className="container">
                <div className="footer-top footer-padding">
                    <div className="row d-flex justify-content-between">
                        <div className="col-xl-3 col-lg-4 col-md-5 col-sm-8">
                            <div className="single-footer-caption mb-50">

                                <div className="footer-logo">
                                    <a href="index.html"><img width="40%" src="assets/img/logo/output-onlinepngtools.png" alt=""/></a>
                                </div>
                                <div className="footer-tittle">
                                    <div className="footer-pera">
                                        <p className="info1"></p>
                                    </div>
                                </div>
                                <div className="footer-number">
                                    <h4><span>(438) </span>223-8805</h4>
                                    <p>Amourabarbers@gmail.com</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-2 col-lg-2 col-md-3 col-sm-5">
                            <div className="single-footer-caption mb-50">
                                <div className="footer-tittle">
                                    <h4>Localisation </h4>
                                    <ul>
                                        <li><a href="https://www.google.com/maps?q=4374+jean+talon+ouest&rlz=1C1CHBF_enCA977CA977&um=1&ie=UTF-8&sa=X&ved=2ahUKEwiCueeO1ND3AhVfjYkEHRjrANcQ_AUoAXoECAEQAw">4374 Rue Jean-Talon O Montréal, QC  </a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-2 col-lg-2 col-md-3 col-sm-5">
                            <div className="single-footer-caption mb-50">
                                <div className="footer-tittle">
                                    <h4>Explorez</h4>
                                    <ul>
                                        <li><a href="#">Mohamed Amoura Meilleur coiffeur ici a Montreal.</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-8">
                            <div className="single-footer-caption mb-50">
                                <div className="footer-tittle">
                                    <h4>Email</h4>
                                    <div className="footer-pera">
                                        <p className="info1">Send your Email to contact you</p>
                                    </div>
                                </div>

                                <div className="footer-form">
                                    <div id="mc_embed_signup">
                                        <form target="_blank" action="https://spondonit.us12.list-manage.com/subscribe/post?u=1462626880ade1ac87bd9c93a&amp;id=92a4423d01" method="get" className="subscribe_form relative mail_part">
                                            <input type="email" name="EMAIL" id="newsletter-form-email" placeholder=" Email Address " className="placeholder hide-on-focus"/>
                                            <div className="form-icon">
                                                <button type="submit" name="submit" id="newsletter-submit" className="email_icon newsletter-submit button-contactForm">Send</button>
                                            </div>
                                            <div className="mt-10 info"></div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <div className="row d-flex justify-content-between align-items-center">
                        <div className="col-xl-9 col-lg-8">
                            <div className="footer-copy-right">
                                <p>
                                    Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved | This is to official website of <a href="https://amourabarbers.com" target="_blank">AmouraBarber's</a>
                                </p>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4">
       
                            <div className="footer-social f-right">
                                <a href="https://www.instagram.com/moha._.barber/"><i className="fab fa-tiktok"></i></a>
                                <a href="https://www.facebook.com/profile.php?id=100013837866083"><i className="fab fa-facebook-f"></i></a>
                                <a href="https://www.instagram.com/moha._.barber/"><i className="fab fa-instagram"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </footer>
      );
    }
  }

  export default Footer;
