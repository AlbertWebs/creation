
<!DOCTYPE html>
<html lang="en">
<head>
    <title>{{$page_title}} | Creation Office Fitouts</title>
    <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
        <link rel="preconnect" href="https://fonts.gstatic.com">
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="{{asset('theme/blog/css/styles.css')}}">
        <link rel="apple-touch-icon" sizes="180x180" href="img/favicons/apple-touch-icon.png')}}">
        <link rel="icon" type="image/png" sizes="32x32" href="img/favicons/favicon-32x32.png')}}">
        <link rel="icon" type="image/png" sizes="16x16" href="img/favicons/favicon-16x16.png')}}">
        <link rel="icon" type="image/png" sizes="16x16" href="img/favicons/android-chrome-192x192.png')}}">
        <link rel="icon" type="image/png" sizes="16x16" href="img/favicons/android-chrome-512x512.png')}}">
        <link rel="icon" type="image/png" href="img/favicons/favicon-32x32.png')}}" sizes="32x32">
        <link rel="icon" type="image/png" sizes="16x16" href="img/favicons/favicon.ico">
        
</head>
<body class="transition-none">
    <div class="search-section">
            <div class="wrap">
                <div class="wrap_float">
                    <div class="search-form">
                        <input type="text" class="search-input" placeholder="Search…">
                        <button class="search-submit"></button>
                    </div>
                    <div class="search-close" id="search-close"></div>
                </div>
            </div>
        </div>
    <div class="container page">
           <div class="container-wrap">
               <div class="mobile-panel">
                   <div class="wrap">
                       <div class="wrap_float">
                           <div class="mobile-btn" id="js-menu-open">
                               <span></span>
                               <span></span>
                               <span></span>
                           </div>
                           <a class="logo" href="/">
                               Creations
                           </a>
                           <div class="search-button"></div>
                       </div>
                   </div>
               </div>
               <div class="container-wrap--dummy"></div>
                <div class="top-panel" id="js-panel">
                <div class="wrap">
                    <div class="wrap_float">
                        <div class="mode-check">
                            <input type="checkbox" id="mode-checkbox" class="mode-checkbox-input">
                            <label for="mode-checkbox" class="mode-checkbox-label" data-dark-title="Dark Mode" data-light-title="Light Mode"></label>
                        </div>
                        <div class="wrap-center">
                            <a href="/" class="logo">
                                Creations
                            </a>
                            <div class="menu" id="js-menu">
                                <ul>
                                    <li><a href="index.html">Home</a></li>
                                    <li><a href="index.html">Home</a></li>
                                    <li><a href="index.html">Home</a></li>
                                    <li><a href="index.html">Home</a></li>
                                    <li><a href="index.html">Home</a></li>
                                    
                                </ul>
                                <ul>
                                    <li class="login-li"><a data-href="http://creationltd.co.ke" class="login-link getModal">Homepage</a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="search-button" id="btn-search"></div>
                    </div>
                    <div class="socials">
                        <a class="soc-link">
                            <img src="{{asset('theme/blog/img/facebook-icon.svg')}}" class="img-svg" alt="">
                        </a>
                        <a class="soc-link">
                            <img src="{{asset('theme/blog/img/twitter-soc-icon.svg')}}" class="img-svg" alt="">
                        </a>
                        <a class="soc-link">
                            <img src="{{asset('theme/blog/img/behance-icon.svg')}}" class="img-svg" alt="">
                        </a>
                    </div>
                    <div class="menu-close" id="js-menu-close"></div>
                </div>
                </div>
         @@yield('content')
        <div class="footer">
            <div class="wrap">
                <div class="wrap_float">
                    <div class="footer-content">
                        <div class="logo">Creations</div>
                        <div class="wrap-center">
                            <div class="socials">
                                <a class="soc-link">
                                    <img src="{{asset('theme/blog/img/facebook-icon.svg')}}" class="img-svg" alt="">
                                </a>
                                <a class="soc-link">
                                    <img src="{{asset('theme/blog/img/twitter-soc-icon.svg')}}" class="img-svg" alt="">
                                </a>
                                <a class="soc-link">
                                    <img src="{{asset('theme/blog/img/behance-icon.svg')}}" class="img-svg" alt="">
                                </a>
                            </div>
                            <div class="menu">
                                <ul>
                                    <li><a href="contact-form.html">Contact Form</a></li>
                                    <li><a href="archive-grid.html">Archives</a></li>
                                    <li><a href="https://hellodigi.ru/support/uipaper/" target="_blank">Documentation</a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="footer-right">
                            <a href="#" class="login-link">Your button</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="overlay" id="overlay"></div>
            </div>
            </div>
            
            
            <div style="display: none;">
                <div class="modal modal_default modal_login" id="modal-login">
                    <div class="modal_wrap">
                        <h2 class="title">Sign in</h2>
                        <div class="modal-form">
                            <div class="input-wrap white-label">
                            <input type="email" class="input" placeholder="Email" required>
                        </div>
                        <div class="input-wrap white-label password-field">
                                <input type="password" class="input password-input" placeholder="Password">
                                <button class="show-password-btn"></button>
                            </div>
                        <div class="agreement">
                            <input type="checkbox" class="agreement-checkbox" id="remember-1">
                            <label for="remember-1" class="agreement-label">
                                <span>
                                    Remember me
                                </span>
                            </label>
                            </div>
                        <button class="btn submit-btn">
                            <span>Login</span>
                        </button>
                        <div class="authorization-socials">
                            <div class="authorization-socials-variants">
                                <div class="socials">
                                    <div class="soc-link">
                                        <img src="{{asset('theme/blog/img/facebook-icon.svg')}}" class="img-svg" alt="">
                                    </div>
                                    <div class="soc-link">
                                        <img src="{{asset('theme/blog/img/twitter-soc-icon.svg')}}" class="img-svg" alt="">
                                    </div>
                                    <div class="soc-link">
                                        <img src="{{asset('theme/blog/img/behance-icon.svg')}}" class="img-svg" alt="">
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>
                        <div class="modal-info">
                            <p><a href="#">Forgot password?</a></p>
                            <p>Don’t have an account? <a data-href="#modal-registration" class="getModal">Create your own right now.</a></p>
                        </div>
                    </div>
                    <div class="modal_close"></div>
                </div>
            </div>
            
            <div style="display: none;">
                <div class="modal modal_default modal_registration" id="modal-registration">
                    <div class="modal_wrap">
                        <h2 class="title">Sign up</h2>
                        <div class="modal-form">
                            <div class="input-wrap white-label">
                            <input type="text" class="input" placeholder="Login">
                        </div>
                        <div class="input-wrap white-label">
                            <input type="text" class="input" placeholder="Email">
                        </div>
                        <div class="input-wrap white-label password-field">
                                <input type="password" class="input password-input" placeholder="Email*">
                                <button class="show-password-btn"></button>
                            </div>
                            <div class="agreement">
                            <input type="checkbox" class="agreement-checkbox" id="agree-1">
                            <label for="agree-1" class="agreement-label">
                                <span>
                                    I accept the conditions of transmitting information
                                </span>
                            </label>
                            </div>
                        <button class="btn submit-btn">
                            <span>Sign up</span>
                        </button>
                        <div class="authorization-socials">
                            <div class="authorization-socials-variants">
                                <div class="socials">
                                    <div class="soc-link">
                                        <img src="{{asset('theme/blog/img/facebook-icon.svg')}}" class="img-svg" alt="">
                                    </div>
                                    <div class="soc-link">
                                        <img src="{{asset('theme/blog/img/twitter-soc-icon.svg')}}" class="img-svg" alt="">
                                    </div>
                                    <div class="soc-link">
                                        <img src="{{asset('theme/blog/img/behance-icon.svg')}}" class="img-svg" alt="">
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>
                        <div class="modal-info">
                            <p>Have an account? <a href="#modal-login" class="getModal">Sign in your right now.</a></p>
                        </div>
                    </div>
                    <div class="modal_close"></div>
                </div>
            </div>
            
            
            <div style="display: none;">
                <div class="modal modal_default modal_reset" id="modal-reset-password">
                    <div class="modal_wrap">
                        <h2 class="title">Forgot password?</h2>
                        <div class="subtitle">
                            Use the e-mail and password that you specified when registering on the site
                        </div>
                        <div class="modal-form">
                        <div class="input-wrap white-label">
                            <input type="text" class="input" placeholder="Email">
                        </div>
                        <button class="btn submit-btn">
                            <span>Reset Password</span>
                        </button>
                        </div>
                        <div class="modal-info">
                            <p>Don’t have an account? <a data-href="#modal-registration" class="getModal">Create your own right now.</a></p>
                        </div>
                    </div>
                    <div class="modal_close"></div>
                </div>
            </div>
    
   
    

    <script src="{{asset('theme/blog/js/scripts-full-min.js')}}"></script>
</body>
</html>