<!doctype html>
<html class="no-js" lang="">

<head>
    <meta charset="utf-8">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <title>{{ config('app.name', 'Laravel') }} - {{$page_title}}</title>
    <?php $Sitesettings = DB::table('sitesettings')->get(); ?>
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    
    <!-- SEO -->
	<meta property="og:title" content=""/>
    <meta property="og:image" content=""/>
    <meta property="og:url" content=""/>
    <meta property="og:site_name" content=""/>
    <meta property="og:description" content=""/>
    <meta name="twitter:title" content="" />
    <meta name="twitter:image" content="" />
    <meta name="twitter:url" content="" />
    <meta name="twitter:card" content="" />
    <!-- SEO -->
    @foreach($Sitesettings as $Settings)
    <link rel="shortcut icon" type="image/png" href="{{url('/')}}/uploads/logo/{{$Settings->favicon}}">
    @endforeach
    <!-- Place favicon.ico in the root directory -->
    <!-- all css here -->
    <!-- bootstrap v3.3.7 css -->
    <link rel="stylesheet" href="{{asset('theme/assets/css/bootstrap.min.css')}}">
    <!-- animate css -->
    <link rel="stylesheet" href="{{asset('theme/assets/css/animate.css')}}">
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
</head>
<?php $Sitesettings = DB::table('sitesettings')->get(); ?>
<body>
    <!--[if lt IE 8]>
            <p class="browserupgrade">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>
        <![endif]-->
    <!-- header-area start -->
    <!--  -->
     <!--================Header Menu Area =================-->
     <header class="header_area">
           	<div class="top_menu">
           		<div class="">
           			<div class="top_inner">
           				<div class="float-left">
                           @foreach($Sitesettings as $Settings)
				  				<a href="{{$Settings->mobile}}"><i class="fa fa-phone"></i> {{$Settings->mobile}}</a>
				  				<a href="mailto:{{$Settings->email}}"><i class="fa fa-envelope"></i> {{$Settings->email}}</a>	
                            @endforeach
           				</div>
           				<div class="float-right">
           					<ul class="list header_socila">
                               @foreach($Sitesettings as $Settings)
                                    <li><a href="{{$Settings->facebook}}"><i class="fa fa-facebook"></i></a></li>
                                    <li><a href="{{$Settings->twitter}}"><i class="fa fa-twitter"></i></a></li>
                                    <li><a href="{{$Settings->linkedin}}"><i class="fa fa-linkedin"></i></a></li>
                                    <li><a href="{{$Settings->google}}"><i class="fa fa-google-plus"></i></a></li>
                                  @endforeach
           					</ul>
           				</div>
           			</div>
           		</div>
           	</div>
        </header>
        <header class="header-area bg-1" id="sticky-header">
       
        <div class="container">
            <div class="row">
                <div class="col-lg-3 col-md-9 col-sm-8 col-6">
                    <div class="logo">
                    @foreach($Sitesettings as $Settings)
                        <a href="{{url('/')}}"><img src="{{url('/')}}/uploads/logo/{{$Settings->logo}}" alt=""></a>
                    @endforeach
                    </div>
                </div>
                <div class="col-lg-9 d-none d-lg-block">
                    <div class="mainmenu">
                        <ul id="navigation">
                            <li class="active"><a href="{{url('/')}}"><i class="fa fa-home"></i> Home</a></li>
                            <li><a href="{{url('/about')}}">About</a></li>
                            <li><a href="{{url('/services')}}">Services</a></li>
                            <li><a href="{{url('/portfolio')}}"> Portfolio</a></li>
                            <li><a href="{{url('/contact')}}"><i class="fa fa-phone"></i> Contact</a></li>
                        </ul>
                    </div>
                </div>

                
                
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
            </div>
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
                            <img src="{{url('/')}}/uploads/logo/{{$Settings->logo}}" alt="">
                            <p>{!!html_entity_decode($Settings->welcome)!!}</p>
                            <h4>Working Hours: </h4>
                            <span>Mon - Sat 8:00 - 19:00 (Sunday:Closed)</span>
                        @endforeach
                            <ul>
                            @foreach($Sitesettings as $Settings)
                                <li><a href="{{$Settings->facebook}}"><i class="fa fa-facebook"></i></a></li>
                                <li><a href="{{$Settings->twitter}}"><i class="fa fa-twitter"></i></a></li>
                                <li><a href="{{$Settings->linkedin}}"><i class="fa fa-linkedin"></i></a></li>
                                <li><a href="{{$Settings->google}}"><i class="fa fa-google-plus"></i></a></li>
                            @endforeach
                            </ul>
                        </div>
                    </div>
                    <div class="col-lg-3 col-sm-6 col-12">
                        <div class="footer-widget footer-contact">
                            <h4 class="widget-title">GET IN TOUCH</h4>
                            <ul>
                            @foreach($Sitesettings as $Settings)
                                <li><i class="fa fa-home"></i> {{$Settings->location}}</li>
                                <li><i class="fa fa-phone"></i>  {{$Settings->mobile}}</li>
                                <li><i class="fa fa-phone"></i>  {{$Settings->mobile_one}}</li>
                                <li><i class="fa fa-envelope"></i> {{$Settings->email}}</li>
                                <li><i class="fa fa-envelope"></i> {{$Settings->email}}</li>
                            @endforeach
                            </ul>
                        </div>
                    </div>
                    <div class="col-lg-2 col-sm-6 col-12">
                        <div class="footer-widget footer-menu">
                            <h4 class="widget-title">Quick Links</h4>
                            <ul>
                                <li><a href="{{url('/')}}">Home</a></li>
                                <li><a href="{{url('/about')}}">About Us</a></li>
                                <li><a href="{{url('/portfolio')}}">Our Works</a></li>
                                <li><a href="{{url('/contact')}}">Contact</a></li>
                                <li><a href="{{url('/privacy')}}">Privacy</a></li>
                                <li><a href="{{url('/terms')}}">Terms</a></li>
                                
                            </ul>
                        </div>
                    </div>
                    <div class="col-lg-3 col-sm-6 col-12">
                        <div class="footer-widget newsletter">
                            <h4 class="widget-title">newsletter</h4>
                            <p>Subscribe to get the latest Newsletters.</p>
                            <form action="#">
                                <input id="myEmail" autocomplete="off" type="text" placeholder="Enter Your Email">
                                
                                <button id="subscribebtn"><i class="fa fa-envelope"> Subscribe </i></button>
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
                        <p><!-- Link back to Designekta Studios can't be removed. Template is licensed under CC BY 3.0. -->
                        Copyright &copy; <script>document.write(new Date().getFullYear());</script> <a href="{{url('/copyright')}}">{{ config('app.name', 'Laravel') }}</a> All rights reserved | Powered By <a href="https://designekta.com" target="_blank">Designekta Studios</a>
                        <!-- Link back to Designekta Studios can't be removed. Template is licensed under CC BY 3.0. --></p>
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
</body>

</html>
