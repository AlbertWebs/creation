<!doctype html>
<html class="no-js" lang="">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="x-ua-compatible" content="ie=edge">
        <title>Designekta Studios || <?php echo $page_title; ?></title>
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <!-- SEO META -->

        <!-- SEO META -->
        <?php $Sitesettings = DB::table('sitesettings')->get(); ?>@foreach($Sitesettings as $Settings)
        <link rel="shortcut icon" type="image/png" href="{{url('/')}}/uploads/logo/{{$Settings->logo}}">
        @endforeach
        <!-- Place favicon.ico in the root directory -->
        <meta name="csrf-token" content="{{ csrf_token() }}">

		<!-- all css here -->
		<!-- bootstrap v3.3.7 css -->
        <link rel="stylesheet" href="{{asset('/theme/css/bootstrap.min.css')}}">
		<!-- animate css -->
        <link rel="stylesheet" href="{{asset('/theme/css/animate.css')}}">
		<!-- owl.carousel.2.0.0-beta.2.4 css -->
        <link rel="stylesheet" href="{{asset('/theme/css/owl.carousel.css')}}">
		<!-- font-awesome v4.6.3 css -->
        <link rel="stylesheet" href="{{asset('/theme/css/font-awesome.min.css')}}">
		<!-- magnific-popup.css -->
        <link rel="stylesheet" href="{{asset('/theme/css/magnific-popup.css')}}">
		<!-- slicknav.min.css -->
        <link rel="stylesheet" href="{{asset('/theme/css/slicknav.min.css')}}">
		<!-- style css -->
		<link rel="stylesheet" href="{{asset('/theme/css/styles.css')}}">
		<!-- responsive css -->
        <link rel="stylesheet" href="{{asset('/theme/css/responsive.css')}}">
		<!-- modernizr css -->
        <script src="{{asset('/theme/js/vendor/modernizr-2.8.3.min.js')}}"></script>

        <!--Start of Tawk.to Script-->
        <script type="text/javascript">
        var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
        (function(){
        var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
        s1.async=true;
        s1.src='https://embed.tawk.to/5c0cb3f167f72462651fb1db/default';
        s1.charset='UTF-8';
        s1.setAttribute('crossorigin','*');
        s0.parentNode.insertBefore(s1,s0);
        })();
        </script>
        <!--End of Tawk.to Script-->
    </head>
    <body>
        <!--[if lt IE 8]>
            <p class="browserupgrade">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>
        <![endif]-->
        <!-- preloder-wrap -->
        <div id="cssLoader3" class="preloder-wrap">
            <div class="loader">
                <div class="child-common child4"></div>
                <div class="child-common child3"></div>
                <div class="child-common child2"></div>
                <div class="child-common child1"></div>
            </div>
        </div>
        <!-- preloder-wrap -->
        <!-- search-area -->
        <div class="search-area">
            <span class="closs-btn">Close</span>
            <div class="container">
                <div class="row">
                    <div class="col-md-6 col-md-offset-3">
                        <div class="search-form">
                            <form method="post" action="{{url('/searchsite')}}">
                                <input type="text" name="search" placeholder="Search Product Here">
                                <input type="hidden" name="_token" value="{{ csrf_token() }}">
                                <button type="submit" name="button" class="btn-style">Search</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- search-area -->
		<!-- heared area start -->
		<header class="header-area">
            <div class="header-top bg-2">
                <div class="container">
                    <div class="row">
                        <div class="col-md-4 col-sm-8 col-xs-12">
                            <div class="header-top-left">
                                <p>All your Design and Tech Solutions</p>
                            </div>
                        </div>

                        <div class="col-md-4 col-sm-4 col-xs-12">
                            <div class="header-top-right text-center">
                                <ul>
                                
                                    @if(Auth::user())
                                    <!-- If User Has Logged In -->
                                    <li><a href="{{url('/clientarea')}}"><i class="fa fa-user"></i> <small> {{Auth::user()->name}}</small></a></li>

                                    <li><a href="{{url('/clientarea/logout')}}"><small><i class="fa fa-power-off"></i> Logout<small></a></li>
                                    @else
                                    <!-- Prompt the User To Login -->
                                    <li><a href="{{url('/clientarea')}}"><small><i class="fa fa-key"></i>Client Login<small></a></li>
                                    @endif
                                </small>
                                   
                                    
                                </ul>
                            </div>
                        </div>

                        <div class="col-md-4 col-sm-4 col-xs-12">
                            <div class="header-top-right text-right">
                                <ul>
                                <?php $SiteSettings = DB::table('sitesettings')->get(); ?>
                                @foreach($SiteSettings as $Settings)
                                    <li><a href="{{$Settings->facebook}}"><i class="fa fa-facebook"></i></a></li>
                                    <li><a href="{{$Settings->twitter}}"><i class="fa fa-twitter"></i></a></li>
                                    <li><a href="{{$Settings->linkedin}}"><i class="fa fa-linkedin"></i></a></li>
                                    <li><a href="{{$Settings->google}}"><i class="fa fa-google-plus"></i></a></li>
                                    <li><a href="{{$Settings->youtube}}"><i class="fa fa-youtube"></i></a></li>
                                @endforeach
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
           
		</header>
		<!-- heared area end -->

      

        <!-- content area start -->
        @yield('content')
        <!-- content area end -->

        <!-- footer-area start  -->
		<footer>
			<div class="footer-top">
				<div class="container">
					<div class="row">
						<div class="col-md-6 col-sm-6 col-xs-12  col">
							<div class="footer-widget footer-logo">
                            <?php $SiteSettings = DB::table('sitesettings')->get(); ?>
                                <h1>@foreach($SiteSettings as $Settings){!!html_entity_decode($Settings->sitename)!!}@endforeach</h1>
                                <?php $SiteSettings = DB::table('sitesettings')->get(); ?>
                                
                                <ul>
                                <?php $SiteSettings = DB::table('sitesettings')->get(); ?>
                                    @foreach($SiteSettings as $Settings)
                                    <li><i class="fa fa-phone"></i> {{$Settings->mobile}}</li>
                                    <li><i class="fa fa-phone"></i> {{$Settings->mobile_one}}</li>
                                    <li><i class="fa fa-phone"></i> {{$Settings->mobile_two}}</li>
                                    <li><i class="fa fa-envelope"></i> {{$Settings->email}}</li>
                                    @endforeach
                                </ul>
							</div>
						</div>
                       
                      
                        <div class="col-md-6 col-sm-6 col-xs-12 col">
                            <div class="footer-widget quick-contact">
                                <h2>Quick Contact</h2>
                                <form action="#">
                                    <input id="contactName" type="text" placeholder="Full Name">
                                    <input id="contactEmail" type="email" placeholder="Email">
                                    <input id="contactSubject" type="text" placeholder="subject">
                                    <textarea id="contactMessage" name="massage" id="massage" cols="30" rows="10" placeholder="Massage"></textarea>
                                    <button id="contactButton" type="button" name="button" class="btn-style">Send</button>
                                    <div id="contactAlert"></div>
                                </form>
                            </div>
                        </div>
					</div>
				</div>
			</div>
            <div class="footer-bottom text-center">
                <div class="container">
                    <div class="row">
                        <div class="col-xs-12">
                            
                           Copyright &copy;<script>document.write(new Date().getFullYear());</script> <a style="color:#337ab7" href="{{url('/copyright')}}">Designekta Studios</a> All rights reserved 

                        </div>
                    </div>
                </div>
            </div>
		</footer>
		<!-- footer-area end  -->

		<!-- all js here -->
		<!-- jquery latest version -->
        <script src="{{asset('/theme/js/vendor/jquery-1.12.4.min.js')}}"></script>
		<!-- bootstrap js -->
        <script src="{{asset('/theme/js/bootstrap.min.js')}}"></script>
		<!-- owl.carousel.2.0.0-beta.2.4 css -->
        <script src="{{asset('/theme/js/owl.carousel.min.js')}}"></script>
		<!-- counterup.main.js -->
        <script src="{{asset('/theme/js/counterup.main.js')}}"></script>
		<!-- isotope.pkgd.min.js -->
        <script src="{{asset('/theme/js/imagesloaded.pkgd.min.js')}}"></script>
		<!-- isotope.pkgd.min.js -->
        <script src="{{asset('/theme/js/isotope.pkgd.min.js')}}"></script>
		<!-- jquery.waypoints.min.js -->
        <script src="{{asset('/theme/js/jquery.waypoints.min.js')}}"></script>
		<!-- jquery.magnific-popup.min.js -->
        <script src="{{asset('/theme/js/jquery.magnific-popup.min.js')}}"></script>
		<!-- jquery.slicknav.min.js -->
        <script src="{{asset('/theme/js/jquery.slicknav.min.js')}}"></script>
		<!-- snake.min.js -->
        <script src="{{asset('/theme/js/snake.min.js')}}"></script>
		<!-- wow js -->
        <script src="{{asset('/theme/js/wow.min.js')}}"></script>
		<!-- plugins js -->
        <script src="{{asset('/theme/js/plugins.js')}}"></script>
		<!-- main js -->
        <script src="{{asset('/theme/js/scripts.js')}}"></script>

        <script>
           $(document).ready(function(){
            $('#subscribeMessage1').hide();
				$('#subscribeMessage2').hide();
               $('#SubmitButton').click(function (event) {
				$('#subscribeMessage1').show(200);
                   $('#subscribeMessage1').html('Submitting...............');
                    event.preventDefault();
                    var Email = $("#emaili").val();
                   
                    $.ajax({
                        headers: {
									'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
								},
                       type: "post",
                       url : '{{url('/')}}/subscribe',
                       data: {email:Email},
                       success: function( msg ) {
						
						$('#subscribeMessage1').hide(200);
						$('#subscribeMessage1').show(400);
                        $('#subscribeMessage1').html(msg);
                        }
                    });
                });
                //  Submiting Commnt
                 $('#submitComment').click(function (event) {
				
                $('#submitCommentAjax').html('Posting.......');
                 event.preventDefault();
                 var Author = $("#authorComment").val();
                 var Email = $("#emailComment").val();
                 var Comments = $("#comment").val();
                 var CommentID = $("#comment_post_ID").val();
                 
                 
                 $.ajax({
                     headers: {
                                 'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                             },
                    type: "post",
                    url : '{{url('/')}}/blog/post_comment',
                    data: {email:Email,author:Author,comment:Comments,commentID:CommentID},
                    success: function( msg ) {
                    
                     $('#submitCommentAjax').hide(400);
                     $('#submitCommentAjax').show(800);
                     $('#submitedCommentAjax').html(msg);
                     }
                 });
             });


             //  Quick Contact
             $('#contactButton').click(function (event) {
				
                $('#contactAlert').html('Posting.......');
                 event.preventDefault();
                 
                 var Email = $("#contactEmail").val();
                 var Name = $("#contactName").val();
                 var Subject = $("#contactSubject").val();
                 var Message = $("#contactMessage").val();
                
                 
                 
                 $.ajax({
                     headers: {
                                 'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                             },
                    type: "post",
                    url : '{{url('/')}}/submitMessage',
                    data: {email:Email,name:Name,message:Message,subject:Subject},
                    success: function( msg ) {
                    
                     $('#contactAlert').hide(400);
                     $('#contactAlert').show(800);
                     $('#contactAlert').html(msg);
                     }
                 });
             });
           });
        </script>


        

        

        <script>
			$('#paypalbtn').hide();
			$('#mpesabtn').hide();
			$('#codbtn').hide();
			$('#coupontext').hide();	
			$('#gifttext').hide();
			

			$(':radio[id=paypal]').change(function(){
				$('#paypalbtn').show();
				$('#mpesabtn').hide();
				$('#codbtn').hide();
			})

			$(':radio[id=mpesa]').change(function(){
				$('#mpesabtn').show();
				$('#paypalbtn').hide();
				$('#codbtn').hide();
			})
			$(':radio[id=cash]').change(function(){
				$('#mpesabtn').hide();
				$('#paypalbtn').hide();
				$('#codbtn').show();
			})
			// Check if check box is checked 
			$('#couponcheck').change(function(ev) {
				if ( $(this).is(':checked') ) $('#coupontext').show();
				else $('#coupontext').hide();
			});	

			$('#giftcheck').change(function(ev) {
				if ( $(this).is(':checked') ) $('#gifttext').show();
				else $('#gifttext').hide();
			});	
	</script>

         <script type="text/javascript">
	              function duplicateEmail(element){
							//Get the email address
                            var email = $(element).val();
							// alert(email);
							//Send Ajax Request With POST as a method
                            $.ajax({
								headers: {
									'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
								},
                                method: "POST",
								url: '/checkemail',
                                data: {email:email},
								// contentType: "application/json; charset=utf-8",
                                // dataType: "json",
			
                                success: function(data) {
                                    // Perform an if check if the request returns results
									$('#checkTheUserName').text(data);
                                },
                                error: function (xhr, status, error) {
									var err = eval("(" + xhr.responseText + ")");
                                    alert(err.Message);
                                }
                            });
                        }
						function addSubscriber(){

						}
                    </script>
    </body>
</html>
