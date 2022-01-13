
<!DOCTYPE html>
<html lang="en">
<head>
    <?php $SiteSettings = DB::table('sitesettings')->get() ?>
    @foreach ($SiteSettings as $settings)
        

    
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
        <link rel="preconnect" href="https://fonts.gstatic.com">
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="{{asset('theme/blog/css/styles.css')}}">
        @foreach ($Blog as $item)
        <title>{{$item->title}} | Creation Office Fitouts</title>

        <!-- Let there be SEO Tags -->
        <meta name="description" content="{{$item->meta}}" />
        <meta name="keywords" content="Creation office Fitouts, Interior Design " />
        <meta name="author" content="Designekta Studios" />
        <link rel="canonical" href="{{url('/')}}"/>
        
     
        <meta property="og:description" content="{{$item->meta}}">
        <meta property="og:image" content="{{url('/')}}/uploads/blog/{{$item->image_one}}" />
        <meta property="og:image:secure_url" content="{{url('/')}}/uploads/blog/{{$item->image_one}}">
        {{-- <meta property="fb:page_id" content="1359118687432239" /> --}}
        <meta property="og:title" content="{{$item->title}} - Creation office Fitouts - Best office fitouts contractor in Kenya" />
        <meta property="og:url" content="{{url('/')}}" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Creation Office Fitouts Limited" />
     
     
        <meta name="twitter:site" content="@creationoffice1">
        <meta name="twitter:creator" content="@creationoffice1">
        <meta name="twitter:card" content="summary">
        <meta name="twitter:title" content="{{$item->title}} - Creation office Fitouts - Best office fitouts contractor in Kenya">
        <meta name="twitter:description" content="{{$item->meta}}">
        <meta name="twitter:image" content="{{url('/')}}/uploads/blog/{{$item->image_one}}">

        
        <!-- </Let there be SEO Tags> -->
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

<body class="transition-none">
        {{-- Search --}}
        <div class="search-section">
            <div class="wrap">
                <div class="wrap_float">
                    <div class="search-form">
                        <input type="text" name="search" class="search-input" placeholder="Search…">
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
                            <img style="max-height:40px" src="{{url('/')}}/uploads/logo/{{$settings->logo}}">
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
                                <a href="{{url('/')}}/news-updates" class="logo">
                                    <img style="max-height:40px" src="{{url('/')}}/uploads/logo/{{$settings->logo}}">
                                </a>
                                <div class="menu" id="js-menu">
                                    <ul>
                                        {{-- <li><a href="{{url('/')}}/news-updates">Home</a></li> --}}
                                        <?php $Category = DB::table('category')->get(); ?>
                                        @foreach ($Category as $Category)
                                        <li><a href="{{url('/')}}/news-updates/category/{{$Category->cat}}">{{$Category->cat}}</a></li>
                                    @endforeach
                                        
                                    </ul>
                                    <ul>
                                        <li class="login-li"><a href="{{url('/')}}" class="login-link getModal">Homepage</a></li>
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
        
                {{--  --}}
                <div class="page-wrap">
                    <div class="page-wrap-content">
                        <div class="breadcrumbs">
                            <div class="wrap wrap-center">
                                <div class="wrap_float">
                                    <a href="{{url('/')}}/news-updates">Home</a> / <a href="#">Post</a> / <span class="current">{{$page_title}}</span>
                                </div>
                            </div>
                        </div>
                        <div class="post-single-wrap sticky-parent">
                                        <div class="share-block">
                                            <div class="share-block-main js-share-block-main">
                                                <div class="socials">
                                                    <a href="https://www.facebook.com/sharer/sharer.php?u={{url('/')}}/news-updates/{{$item->slung}}" class="soc-link" data-title="Facebook">
                                                       <span class="soc-icon">
                                                           <img src="{{asset('theme/blog/img/facebook-icon.svg')}}" class="img-svg" alt="">
                                                       </span>
                                                    </a>
                                                 
                                                    <a href="https://twitter.com/intent/tweet?url={{url('/')}}/news-updates/<?=urlencode($item->slung)?>" class="soc-link" data-title="Twitter">
                                                       <span class="soc-icon">
                                                           <img src="{{asset('theme/blog/img/twitter-soc-icon.svg')}}" class="img-svg" alt="">
                                                       </span>
                                                    </a>
                                                </div>
                                                <div class="share-block-item js-anchor link-to-comments" data-href="#comments-section">
                                                    <div class="comments-count">
                                                        <span>234</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="share-block-item mobile-item js-mobile-share-show mobile-share-show-btn">
                                                <div class="show-mobile-icon"></div>
                                            </div>
                                            <div class="share-block-item add-to-favorites">
                                                <div class="favorites-tag js-add-to-fav">
                                                    <i class="is-added bouncy"></i>
                                                    <i class="not-added bouncy"></i>
                                                    <span class="fav-overlay"></span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="single-header">
                                            <div class="wrap wrap-center">
                                                <div class="wrap_float">
                                                    <div class="post-tags">
                                                    <?php $Category = DB::table('category')->where('id',$item->cat)->get(); ?>
                                                    @foreach ($Category as $Category)
                                                    <a href="{{url('/')}}/news-updates/category/{{$Category->cat}}" class="tag">{{$Category->cat}}</a>
                                                    @endforeach
                                                </div>
                                                <h1 class="page-title">
                                                    {{$item->title}}
                                                </h1>
                                                <div class="post-info">
                                                    <a href="#" class="post-author post-info-author">
                                                        <div class="author-image">
                                                            <img src="{{asset('theme/blog/img/author.jpg')}}" alt="" class="image-cover">
                                                        </div>
                                                        <span>{{$item->author}}</span>
                                                    </a>
                                                    <div class="post-date post-info-date">
                                                        <?php 
                                                            $RawDate = $item->created_at;
                                                            $FormatDate = strtotime($RawDate);
                                                            $Month = date('M',$FormatDate);
                                                            $Date = date('D',$FormatDate);
                                                            $Year = date('Y',$FormatDate);
                                                        ?>
                                                        {{$Date}} {{$Month}} {{$Year}}
                                                    </div>
                                                    <div class="post-views post-info-views">
                                                        3457
                                                    </div>
                                                </div>
                                                <div class="post-description">
                                                    <p>
                                                        {{$item->meta}}
                                                    </p>
                                                </div>
                                                <div class="post-image-large wide">
                                                    <img style="max-height:800px" src="{{url('/')}}/uploads/blog/{{$item->image_one}}" alt="">
                                                    <span class="caption-text">{{$item->title}}</span>
                                                </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="single-content wp-content">
                                            <div class="wrap wrap-center">
                                                <div class="wrap_float">
                                                    <p>
                                                        {!!html_entity_decode($item->content)!!}						
                                                    </p>
                                                                            
                                                    
                                                    <div class="source-info">
                                                        Source: <a href="{{url('/')}}" class="source-link" target="_blank"><span>{{url('/')}}</span></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                        </div>
                                    
                    </div>
                </div>
                <?php $Random = DB::table('blog')->inRandomOrder()->limit(3)->get() ?>
                <div class="see-also-section section">
                    <div class="wrap">
                        <div class="wrap_float">
                            <h2 class="title">
                                See also
                            </h2>
                            <div class="section-content">
                                <div class="see-also-items">
                                    @foreach ($Random as $Blog)
                                <a href="{{url('/')}}/news-updates/{{$Blog->slung}}" class="post-item">
                                     <img src="{{url('/')}}/uploads/blog/{{$Blog->image_one}}" alt="" class="post-bg-img">
                                     <div class="post-tags">
                                         <?php $Category = DB::table('category')->where('id',$Blog->cat)->get(); ?>
                                         @foreach ($Category as $Category)
                                         <div class="tag">{{$Category->cat}}</div>
                                         @endforeach
                                     </div>
                                     <h3 class="post-title">
                                         {{$Blog->title}}
                                     </h3>
                                     <div class="post-info">
                                         <div class="post-author post-info-author">
                                             <div class="author-image">
                                                 <img src="{{asset('theme/blog/img/author.jpg')}}" alt="" class="image-cover">
                                             </div>
                                             <span>{{$Blog->author}}</span>
                                         </div>
                                         <div class="post-date post-info-date">
                                             <?php 
                                                 $RawDate = $Blog->created_at;
                                                 $FormatDate = strtotime($RawDate);
                                                 $Month = date('M',$FormatDate);
                                                 $Date = date('D',$FormatDate);
                                                 $Year = date('Y',$FormatDate);
                                             ?>
                                             {{$Date}} {{$Month}} {{$Year}}
                                         </div>
                                         <div class="post-views post-info-views">
                                             3457
                                         </div>
                                     </div>
                                 </a>
                                @endforeach
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                
                <?php $Related = DB::table('blog')->where('cat',$item->cat)->get() ?>
                <div class="posts-list-section section">
                    <div class="wrap wrap-center">
                        <div class="wrap_float">
                            <h2 class="title">
                                Related Posts
                            </h2>
                            <div class="section-content">
                                <div class="post-list">
                                    @foreach ($Related as $Blog)
                                    <a href="{{url('/')}}/news-updates/{{$Blog->slung}}" class="post-preview-item">
                                        <div class="post-preview-item-cover">
                                            <img src="{{url('/')}}/uploads/blog/{{$Blog->image_one}}" alt="">
                                        </div>
                                        <div class="post-tags">
                                            <?php $Category = DB::table('category')->where('id',$Blog->cat)->get(); ?>
                                            @foreach ($Category as $Category)
                                            <div class="tag">{{$Category->cat}}</div>
                                            @endforeach
                                        </div>
                                        <h3 class="post-title">
                                            {{$Blog->title}}
                                        </h3>
                                        <div class="post-info">
                                            <div class="post-author post-info-author">
                                                <div class="author-image">
                                                    <img src="{{asset('theme/blog/img/author.jpg')}}" alt="" class="image-cover">
                                                </div>
                                                <span>{{$Blog->author}}</span>
                                            </div>
                                            <div class="post-date post-info-date">
                                                <?php 
                                                    $RawDate = $Blog->created_at;
                                                    $FormatDate = strtotime($RawDate);
                                                    $Month = date('M',$FormatDate);
                                                    $Date = date('D',$FormatDate);
                                                    $Year = date('Y',$FormatDate);
                                                ?>
                                                {{$Date}} {{$Month}} {{$Year}}
                                            </div>
                                            <div class="post-views post-info-views">
                                                3457
                                            </div>
                                        </div>
                                    </a>
                                    @endforeach
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                 {{-- @include('blog.instagram') --}}
                {{--  --}}
        <div class="footer">
            <div class="wrap">
                <div class="wrap_float">
                    <div class="footer-content">
                        <div class="logo">
                            <img style="max-height:40px" src="{{url('/')}}/uploads/logo/{{$settings->logo}}">
                        </div>
                        <div class="wrap-center">
                            <div class="socials">
                                <a href="{{$settings->facebook}}" class="soc-link">
                                    <img src="{{asset('theme/blog/img/facebook-icon.svg')}}" class="img-svg" alt="">
                                </a>
                                <a href="{{$settings->twitter}}" class="soc-link">
                                    <img src="{{asset('theme/blog/img/twitter-soc-icon.svg')}}" class="img-svg" alt="">
                                </a>
                                {{-- <a href="{{$settings->instagram}}" class="soc-link">
                                    <img src="{{asset('theme/blog/img/instagram-soc-icon.svg')}}" class="img-svg" alt="">
                                </a> --}}
                            </div>
                            <div class="menu">
                                <ul>
                                    <li><a href="{{url('/')}}/about">About Us</a></li>
                                    <li><a href="{{url('/')}}/portfolio">Our Projects</a></li>
                                    <li><a href="{{url('/')}}/contact">Contact Us</a></li>
                                    <li><a href="{{url('/')}}/privacy">Privacy Policy</a></li>
                                    <li><a href="{{url('/')}}/terms" target="_blank">Terms and Conditions</a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="footer-right">
                            <a href="{{url('/')}}" class="login-link">Homepage</a>
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
    @endforeach
    @endforeach
</body>
</html>