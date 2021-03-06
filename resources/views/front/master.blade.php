<!doctype html>
<html class="no-js" lang="en">

<head>
    <meta charset="utf-8">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="keywords" content="Interior Design, Construction, Refurbishments, Ceiling, Flooring, Interior Fitting, Office Fitouts, FURNITURE SUPPLY, PARTITIONING">
    <?php $Sitesettings = DB::table('sitesettings')->get(); ?>
    @include('favicon') 
    <!-- SEO -->
    {!! SEOMeta::generate() !!}
	{!! OpenGraph::generate() !!}
	{!! Twitter::generate() !!}
	<!-- SEO -->
	
	
    <!-- Place favicon.ico in the root directory -->
    <!-- all css here -->
    <!-- bootstrap v3.3.7 css -->
    <link rel="stylesheet" href="{{asset('theme/assets/css/bootstrap.min.css')}}">
    <!-- animate css -->
    <link rel="stylesheet" href="{{asset('theme/assets/css/animate.css')}}">

    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.0/animate.min.css">
    <!-- owl.carousel.2.0.0-beta.2.4 css -->
    <link rel="stylesheet" href="{{asset('theme/assets/css/owl.carousel.css')}}">
    <!-- font-awesome v4.6.3 css -->
    <link rel="stylesheet" href="{{asset('theme/assets/css/font-awesome.min.css')}}">
    <!-- flaticon.css -->
    <link rel="stylesheet" href="{{asset('theme/assets/css/flaticon.css')}}">
    <!-- magnific-popup.css -->
    <link rel="stylesheet" href="{{asset('theme/assets/css/magnific-popup.css')}}">
    <!-- slicknav.min.css -->
    <link rel="stylesheet" href="{{asset('theme/assets/css/slicknav.min.css')}}">
    <!-- slicknav.min.css -->
    <link rel="stylesheet" href="{{asset('theme/assets/css/slick.css')}}">
    <!-- style css -->
    <link rel="stylesheet" href="{{asset('theme/assets/css/styles.css')}}">
    <!-- responsive css -->
    <link rel="stylesheet" href="{{asset('theme/assets/css/responsive.css')}}">
    <link rel="stylesheet" href="{{asset('theme/assets/js/infinite-slider.css')}}">
    <!-- modernizr css -->
    <script src="{{asset('theme/assets/js/vendor/modernizr-2.8.3.min.js')}}"></script>

    
    

    <!-- Ajax CSRF -->
	<meta name="csrf-token" content="{{ csrf_token() }}">
	<!--Start of Tawk.to Script-->
	<script type="text/javascript">
	var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
	(function(){
	var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
	s1.async=true;
	s1.src='https://embed.tawk.to/5c385973361b3372892f9779/default';
	s1.charset='UTF-8';
	s1.setAttribute('crossorigin','*');
	s0.parentNode.insertBefore(s1,s0);
	})();
	</script>
	<!--End of Tawk.to Script--> 
   
    {{-- <script type="text/javascript" id="cookieinfo"
        src="//cookieinfoscript.com/js/cookieinfo.min.js"
        data-bg="#32415C"
        data-fg="#FFFFFF"
        data-link="#F1D600"
        data-cookie="CookieInfoScript"
        data-text-align="left"
        data-close-text="Got it!">
    </script> --}}

    <!-- Global site tag (gtag.js) - Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-HXD65WYX5G"></script>
    <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', 'G-HXD65WYX5G');
    </script>


</head>
<?php $Sitesettings = DB::table('sitesettings')->get(); ?>
<body>
<!--CSS Spinner-->
{{-- <div class="spinner-wrapper">
<div class="spinner"></div> --}}
</div>
    <!--[if lt IE 8]>
            <p class="browserupgrade">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>
        <![endif]-->
    <!-- header-area start -->
    <!--  -->
     <!--================Header Menu Area =================-->
     <header class="header_area" id="sticky-header">
        <h1 style="display: none">Interior Designer in Nairobi, Kenya</h1>
              <div class="top_menu">
                  <div class="">
                      <div class="top_inner">
                          <div class="float-left">
                          @foreach($Sitesettings as $Settings)
                                   <a class="wow fadeInLeft" data-wow-duration="1s" data-wow-delay="100ms" href="{{$Settings->mobile}}"><i class="fa fa-phone"></i> {{$Settings->mobile}}</a>
                                 <a class="wow fadeInDown" data-wow-duration="1s" data-wow-delay="100ms" href="mailto:{{$Settings->email}}"><i class="fa fa-envelope"></i> {{$Settings->email}}</a>
                                 <a class="wow fadeIn" data-wow-duration="1s" data-wow-delay="100ms" href="{{url('/')}}"><i class="fa fa-map-marker"></i> {{$Settings->location}}</a>	
                           @endforeach
                          </div>
                          <div class="float-right">
                              <ul class="list header_socila">
                              @foreach($Sitesettings as $Settings)
                                   <li class="wow fadeInRight" data-wow-duration="1s" data-wow-delay="100ms"><a href="{{$Settings->facebook}}"><i class="fa fa-facebook"></i></a></li>
                                   <li class="wow fadeInRight" data-wow-duration="1s" data-wow-delay="200ms"><a href="{{$Settings->twitter}}"><i class="fa fa-twitter"></i></a></li>
                                   <li class="wow fadeInRight" data-wow-duration="1s" data-wow-delay="300ms"><a href="{{$Settings->linkedin}}"><i class="fa fa-linkedin"></i></a></li>
                                   <li class="wow fadeInRight" data-wow-duration="1s" data-wow-delay="400ms"><a href="{{$Settings->google}}"><i class="fa fa-google-plus"></i></a></li>
                                 @endforeach
                              </ul>
                          </div>
                      </div>
                  </div>
              </div>
              <div class="main_menu" id="mainNav">
               <nav class="navbar navbar-expand-lg navbar-light">
                   <div class="container">
                       <!-- Brand and toggle get grouped for better mobile display -->
                       <a style="max-width:250px" class="navbar-brand logo_h wow fadeInUp" data-wow-duration="1s" data-wow-delay="100ms" href="{{url('/')}}"><img height="auto" src="{{url('/')}}/uploads/logo/{{$Settings->logo}}" alt="Creation Office Fitouts - Interior Designer In Kenya"><img width="200" height="auto" src="{{url('/')}}/uploads/logo/{{$Settings->logo}}" alt="Creation Office Fitouts"></a>
                       <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                           <span class="icon-bar"></span>
                           <span class="icon-bar"></span>
                           <span class="icon-bar"></span>
                       </button>
                       <!-- Collect the nav links, forms, and other content for toggling -->
                       <div class="collapse navbar-collapse offset" id="navbarSupportedContent">
                           <ul class="nav navbar-nav menu_nav ml-auto">
                           
                               <li class="nav-item active wow fadeInUp" data-wow-duration="1s" data-wow-delay="200ms"><a class="nav-link" href="{{url('/')}}"><i class="fa fa-home"></i> Home</a></li> 
                               <li class="nav-item wow fadeInUp" data-wow-duration="1s" data-wow-delay="300ms"><a class="nav-link" href="{{url('/about')}}">About</a></li> 
                               <li class="nav-item wow fadeInUp" data-wow-duration="1s" data-wow-delay="400ms"><a class="nav-link" href="{{url('/services')}}">Services</a></li> 
                               <li class="nav-item wow fadeInUp" data-wow-duration="1s" data-wow-delay="500ms"><a class="nav-link" href="{{url('/portfolio')}}">Projects</a></li>
                               <li class="nav-item wow fadeInUp" data-wow-duration="1s" data-wow-delay="500ms"><a class="nav-link" href="{{url('/clients')}}">Clients</a></li>
                               <?php $Profile = DB::table('files')->get(); ?>
                               @foreach($Profile as $profile) 
                               <li class="nav-item wow fadeInUp" data-wow-duration="1s" data-wow-delay="600ms"><a download class="nav-link" href="{{url('/')}}/uploads/files/{{$profile->file}}"><i class="fa fa-download"></i> Profile</a></li>
                               @endforeach
                               {{-- <li class="nav-item wow fadeInUp" data-wow-duration="1s" data-wow-delay="700ms"><a class="nav-link" href="{{url('/')}}/news-updates"><i class="fa fa-info"></i> News Updates</a></li> --}}
                               <li class="nav-item wow fadeInUp" data-wow-duration="1s" data-wow-delay="700ms"><a class="nav-link" href="{{url('/contact')}}"><i class="fa fa-phone"></i> Contact</a></li>
                           </ul>
                       </div> 
                   </div>
               </nav>
           </div>
    </header>
       
   
        <!--================Header Menu Area =================-->
        
    <!-- header-area end -->
    @yield('content')
    <!-- footer-area start -->
    <footer class="footer-area">
        <div class="footer-top bg-1">
            <div class="container">
                <div class="row">
                    <div class="col-lg-4 col-sm-6 col-12">
                        <div class="footer-widget footer-logo">
                        @foreach($Sitesettings as $Settings)
                            <img class="wow fadeIn" data-wow-duration="1s" data-wow-delay="200ms" src="{{url('/')}}/uploads/logo/{{$Settings->logo}}" alt="Interior Designer In Kenya">
                            <p class="wow fadeInLeft" data-wow-duration="1s" data-wow-delay="600ms">Creation office Fitouts is the number one interior design firm, in Nairobi, Kenya.</p>
                            <h4>Working Hours: </h4>
                            <span>Mon - Sat 8:00 - 19:00 (Sunday:Closed)</span>
                        @endforeach
                            <ul>
                            @foreach($Sitesettings as $Settings)
                                <li class="wow fadeIn" data-wow-duration="1s" data-wow-delay="200ms"><a href="{{$Settings->facebook}}"><i class="fa fa-facebook"></i></a></li>
                                <li class="wow fadeIn" data-wow-duration="1s" data-wow-delay="400ms"><a href="{{$Settings->twitter}}"><i class="fa fa-twitter"></i></a></li>
                                <li class="wow fadeIn" data-wow-duration="1s" data-wow-delay="600ms"><a href="{{$Settings->linkedin}}"><i class="fa fa-linkedin"></i></a></li>
                                <li class="wow fadeIn" data-wow-duration="1s" data-wow-delay="800ms"><a href="{{$Settings->google}}"><i class="fa fa-google-plus"></i></a></li>
                            @endforeach
                            </ul>
                        </div>
                    </div>
                    <div class="col-lg-3 col-sm-6 col-12">
                        <div class="footer-widget footer-contact">
                            <h4 class="widget-title">GET IN TOUCH</h4>
                            <ul>
                            @foreach($Sitesettings as $Settings)
                                <li class="wow fadeIn" data-wow-duration="1s" data-wow-delay="200ms"><i class="fa fa-home"></i> {{$Settings->location}}</li>
                                <li class="wow fadeIn" data-wow-duration="1s" data-wow-delay="400ms"><i class="fa fa-phone"></i>  {{$Settings->mobile}}</li>
                                <li class="wow fadeIn" data-wow-duration="1s" data-wow-delay="600ms"><i class="fa fa-phone"></i>  {{$Settings->mobile_one}}</li>
                                <li class="wow fadeIn" data-wow-duration="1s" data-wow-delay="800ms"><i class="fa fa-envelope"></i> {{$Settings->email}}</li>
                                <li class="wow fadeIn" data-wow-duration="1s" data-wow-delay="1000ms"><i class="fa fa-envelope"></i> {{$Settings->email_one}}</li>
                            @endforeach
                            </ul>
                        </div>
                    </div>
                    <div class="col-lg-2 col-sm-6 col-12">
                        <div class="footer-widget footer-menu">
                            <h4 class="widget-title">Quick Links</h4>
                            <ul>
                                <li class="wow fadeIn" data-wow-duration="1s" data-wow-delay="200ms"><a href="{{url('/')}}">Home</a></li>
                                <li class="wow fadeIn" data-wow-duration="1s" data-wow-delay="400ms"><a href="{{url('/about')}}">About Us</a></li>
                                <li class="wow fadeIn" data-wow-duration="1s" data-wow-delay="600ms"><a href="{{url('/portfolio')}}"> Projects </a></li>
                                <li class="wow fadeIn" data-wow-duration="1s" data-wow-delay="800ms"><a href="{{url('/contact')}}">Contact</a></li>
                                <li class="wow fadeIn" data-wow-duration="1s" data-wow-delay="1000ms"><a href="{{url('/privacy')}}">Privacy</a></li>
                                <li class="wow fadeIn" data-wow-duration="1s" data-wow-delay="1200ms"><a href="{{url('/terms')}}">Terms</a></li>
                                
                            </ul>
                        </div>
                    </div>
                    <div class="col-lg-3 col-sm-6 col-12">
                        <div class="footer-widget newsletter">
                            <h4 class="widget-title">newsletter</h4>
                            <p>Subscribe to get the latest Newsletters.</p>
                            <form action="#">
                                <input id="myEmail" autocomplete="off" type="text" placeholder="Enter Your Email">
                                
                                <button class="wow fadeInRight" data-wow-duration="1s" data-wow-delay="1200ms" id="subscribebtn"><i class="fa fa-envelope"> Subscribe </i></button>
                                <div id="info-alert"></div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="footer-bootem">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <!--<p>-->
                        <!-- Link back to Designekta Studios can't be removed. Template is licensed under CC BY 3.0. -->
                        <!--Copyright &copy; <script>document.write(new Date().getFullYear());</script> <a href="{{url('/copyright')}}">{{ config('app.name', 'Laravel') }}</a> All rights reserved | Powered By <a title="Credit To Michigua Agency" href="https://designekta.com" target="_blank">Designekta Studios</a>-->
                        <!-- Link back to Designekta Studios can't be removed. Template is licensed under CC BY 3.0. -->
                        <!--</p>-->
                        <p>
                        <!-- Link back to Designekta Studios can't be removed. Template is licensed under CC BY 3.0. -->
                        Copyright &copy; <script>document.write(new Date().getFullYear());</script> <a href="{{url('/copyright')}}">{{ config('app.name', 'Laravel') }}</a> All rights Reserved 
                        <!-- Link back to Designekta Studios can't be removed. Template is licensed under CC BY 3.0. -->
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    <!-- footer-area start -->
    <!-- jquery latest version -->
    <script src="{{asset('theme/assets/js/vendor/jquery-2.2.4.min.js')}}"></script>
    <!-- popper.min.js -->
    <script src="{{asset('theme/assets/js/vendor/popper.min.js')}}"></script>
    <!-- bootstrap js -->
    <script src="{{asset('theme/assets/js/bootstrap.min.js')}}"></script>
    <!-- owl.carousel.2.0.0-beta.2.4 css -->
    <script src="{{asset('theme/assets/js/owl.carousel.min.js')}}"></script>
    <script src="{{asset('theme/assets/js/carousel.js')}}"></script>
    <!-- Wow  -->
    <script src="{{asset('theme/assets/js/wow.min.js')}}"></script>
    <script> new WOW().init(); </script>
    <!-- slick.min.js -->
    <script src="{{asset('theme/assets/js/slick.min.js')}}"></script>
    <!-- plugins js -->
    <script src="{{asset('theme/assets/js/plugins.js')}}"></script>
    <script>
		$(document).ready(function(){
            
		   $('#subscribebtn').click(function (event) {
				
				$('#info-alert').html('Submitting...............');
				event.preventDefault();
				var Email = $("#myEmail").val();

				$.ajax({
					headers: {
								'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
							},
					type: "post",
					url : '/subscribe',
					data: {email:Email},
				success: function( msg ) {

					$('#subscribeMessage1').hide();
					$('#info-alert').show(400);
					$('#info-alert').html(msg);
					}
				});
		   });
        });
    </script>
    <!-- google map -->
    <!-- main js -->
    <script src="{{asset('theme/assets/js/scripts.js')}}"></script>
    
    <script>
        $(document).ready(function() {
            //Preloader
            $(window).on("load", function() {
                preloaderFadeOutTime = 500;
                    function hidePreloader() {
                        var preloader = $('.spinner-wrapper');
                        preloader.fadeOut(preloaderFadeOutTime);
                    }
                hidePreloader();
            });
        });
    </script>
    <script>
        $("form").each(function() {
            $(this).find(':input[type="submit"]').prop('disabled', true);
        });
        function correctCaptcha() {
            $("form").each(function() {
                $(this).find(':input[type="submit"]').prop('disabled', false);
            });
        }
    </script>
    @include('front.schema')
</body>

</html>
