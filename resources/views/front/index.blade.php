@extends('front.master')
@section('content')
		    <!-- slider-area start -->
    <div class="slider-area slider-area2">
            <div class="slider-active2 next-prev-style">
               @foreach($Slider as $slider)
                <div class="slider-items">
                    <img src="{{url('/')}}/uploads/slider/{{$slider->image}}" alt="" class="slider">
                    <div class="slider-content">
                        <div class="container">
                            <div class="row">
                                <div class="col-lg-10 offset-lg-1 col-12">
                                    <div class="slider-text text-center">
                                        <div class="line"></div>
                                          <h3><span class="d-block"><small>{{$slider->name}}</small> <span></h3>
                                          <a href="{{url('/portfolio')}}">See Projects <i class="fa fa-long-arrow-right"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                   
                @endforeach
              
            </div>
    </div>
    <!-- slider-area end -->
    
    <!-- ablout-area start -->
    <div class="about-area ptb-120">
        <div class="container">
            <div class="row col-lg-12">
               
                    <div class="about-wrap wow fadeInUp" data-wow-duration="1s" data-wow-delay="200ms">
                        <center>
                        <?php $Sitesettings = DB::table('sitesettings')->get(); ?>
                        @foreach($Sitesettings as $Settings)
                        <h3><strong>{!!html_entity_decode($Settings->welcome)!!}</strong></h3>
                       
                        <p></p>
                        @endforeach
                        </center>
                        
                    </div>
                
                
            </div>
        </div>
    </div>
    <!-- ablout-area end -->

    {{--  --}}
    <div class="spacial-area ptb-120 bg-1">
        <div class="container">
           <div class="row">
              <div class="col-12">
                 <div class="section-title text-center">
                    <h2>OUR SPECIALIZATION</h2>
                    <h3>We always endeavor to uphold the highest standards of art, design, planning, and project management while strictly adhering to the ethics and best practices for the benefit of our clients</h3>
                 </div>
              </div>
           </div>
           <div class="row">
              <div class="col-lg-6 d-lg-block d-none ">
                 <div class="spacial-img">
                    <img src="{{asset('theme/assets/images/spacial/1.jpg')}}" alt="">
                 </div>
              </div>
              <div class="col-lg-6 col-12">
                 <div class="spacial-wrap">
                    <div class="row">
                       <div class="col-md-6 col-sm-6 col-12">
                          <div class="spacial-item">
                             <span class="flaticon-house-3"></span>
                             <h4>Architecture</h4>
                          </div>
                       </div>
                       <div class="col-md-6 col-sm-6 col-12">
                          <div class="spacial-item">
                             <span class="flaticon-house"></span>
                             <h4>Interior Design</h4>
                          </div>
                       </div>
                       <div class="col-md-6 col-sm-6 col-12">
                          <div class="spacial-item">
                             <span class="flaticon-cityscape"></span>
                             <h4>Construction</h4>
                          </div>
                       </div>
                       <div class="col-md-6 col-sm-6 col-12">
                          <div class="spacial-item">
                             <span class="flaticon-house-1"></span>
                             <h4>Art Design</h4>
                          </div>
                       </div>
                       
                    </div>
                 </div>
              </div>
           </div>
        </div>
     </div>
    {{--  --}}
 
    <!-- .project-area start -->

    <div style="padding-top:100px" class="project-area">
        <div class="container">
            <div class="row">
                <div class="col-lg-4 col-12">
                    <div class="section-title">
                        <h2>Latest Projects</h2>
                    </div>
                </div>
                
            </div>
            <div class="row grid">
            <?php $countP = 2; ?>
               @foreach($Portfolio as $portfolio)
               <div class="col-lg-4 col-sm-6 col-12 project wow fadeInUp" data-wow-duration="700ms" data-wow-delay="{{$countP}}00ms">
                    <div class="project-wrap">
                        <img src="{{url('/')}}/uploads/portfolio/{{$portfolio->image_one}}" alt="">
                        <div class="project-content">
                            <a href="{{url('/')}}/portfolio/{{$portfolio->slung}}"><i class="fa fa-search"></i></a>
                            <h3 style="color:#ffffff">{{$portfolio->title}}</h3>
                        </div>
                    </div>
                </div>
                <?php $countP++ ?>
                @endforeach
               
            </div>
        </div>
    </div>
    <!-- .project-area end -->

       @if($Services->isEmpty())

@else
    <!-- service-area start -->
<div class="service-area bg-1">
    <div class="container">
        <div class="row">
            <div class="col-12">
                <div class="section-title text-center">
                    <h2>Our Services</h2>
                 </div>
            </div>
        </div>
        
        <div class="row">
           <!-- Services Starts -->
        <?php $countP = 0.5; ?>
        @foreach($Services as $service)
        <div class="col-lg-4 col-sm-6 col-12">
                <div class="blog-wrap2 wow fadeInUp" data-wow-duration="1s" data-wow-delay="{{$countP}}s">
                    <img style="max-height:265px; min-height:265px" src="{{url('/')}}/uploads/services/{{$service->image_one}}" alt="">
                    <div class="blog-content2">
                        
                        <h4><a href="{{url('/services')}}"><center>{{$service->title}}</center></a></h4>
                      
                        
                    </div>
                </div>
            </div>
            <?php $countP+0.5 ?>
            @endforeach
        <!-- Services Stops -->
           
        </div>
    </div>
</div>
<!-- service-area end -->
@endif

    <!-- fanfact-area start -->
    <?php $Banner = DB::table('banners')->where('name','home')->where('section','counter')->get(); ?>
    @foreach($Banner as $banner)
    <div class="fanfact-area black-opacity" style="background: url({{url('/')}}/uploads/banners/{{$banner->image}}) no-repeat center center / cover">
        <div class="container">
            <div class="row">
                <div class="col-md-4 col-sm-3 col-6">
                    <div class="funfact-wrap wow fadeInUp" data-wow-duration="700ms" data-wow-delay="300ms">
                        <h2 class="counter">5</h2>
                        <p>Years</p>
                    </div>
                </div>
                <div class="col-md-4 col-sm-3 col-6">
                    <div class="funfact-wrap wow fadeInUp" data-wow-duration="700ms" data-wow-delay="600ms">
                        <h2 class="counter"><?php $Projects =  DB::table('portfolio')->get();  ?> 60 </h2>
                        <p>Projects</p>
                    </div>
                </div>
                <div class="col-md-4 col-sm-3 col-6">
                    <div class="funfact-wrap wow fadeInUp" data-wow-duration="700ms" data-wow-delay="900ms">
                        <h2 class="counter"><?php $Projects =  DB::table('clients')->get();   ?> 60</h2>
                        <p>Clients</p>
                    </div>
                </div>
               
            </div>
        </div>
    </div>
    @endforeach
    <!-- fanfact-area end -->
    <!-- quote-area start -->
    <div class="quote-area">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="quote-wrap text-center">
                        <h2 class="wow fadeInUp" data-wow-duration="700ms" data-wow-delay="300ms">Would you like us to handle your project?</h2>
                        <a class="wow fadeInLeft" data-wow-duration="700ms" data-wow-delay="300ms" href="{{url('/contact')}}">Get a quote</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- quote-area end -->
    @if($Testimonial->isEmpty())

    @else
    <!-- testmonial-area start -->
    <?php $Banner = DB::table('banners')->where('name','home')->where('section','testimonial')->get(); ?>
    @foreach($Banner as $banner)
    <div class="testmonial-area ptb-120 black-opacity" style="background: url({{url('/')}}/uploads/banners/{{$banner->image}}) no-repeat center center / cover">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="section-title section-title2">
                        <h2 class="wow fadeInUp" data-wow-duration="1s" data-wow-delay="200ms">Customer Feedback</h2>
                        <h3 class="wow fadeInLeft" data-wow-duration="1s" data-wow-delay="400ms">This is what some of our customers say about us</h3>
                    </div>
                </div>
            </div>
    
            <div class="row revarce-wrap">
                <div class="col-lg-7 col-md-6 col-12">
                    <div class="test-content-active">
                        @foreach($Testimonial as $testimonial) 
                            <div class="test-wrap">
                                <i class="fa fa-quote-left"></i>
                                <p class="wow fadeInRight" data-wow-duration="1s" data-wow-delay="600ms">{!!html_entity_decode($testimonial->content)!!}</p>
                                <h4 class="wow fadeInRight" data-wow-duration="1s" data-wow-delay="800ms">{{$testimonial->name}}</h4>
                                <span>{{$testimonial->position}} @ {{$testimonial->company}}</span>
                            </div>
                        @endforeach
                    
                    </div>
                </div>
                <div class="col-lg-5 col-md-6">
                    <div class="test-img-active">
                    @foreach($Testimonial as $testimonial)
                        <div class="test-img">
                            <img class="wow fadeInRight" data-wow-duration="2s" data-wow-delay="600ms" src="{{url('/')}}/uploads/testimonials/{{$testimonial->image}}" alt="">
                            <ul class="wow fadeInUp" data-wow-duration="1s" data-wow-delay="600ms">
                            @if($testimonial->rating == '5')
                                <li>Project Ratting : </li>
                                <li><i class="fa fa-star"></i></li>
                                <li><i class="fa fa-star"></i></li>
                                <li><i class="fa fa-star"></i></li>
                                <li><i class="fa fa-star"></i></li>
                                <li><i class="fa fa-star"></i></li>
                            @endif

                            @if($testimonial->rating == '4')
                                <li>Project Ratting : </li>
                                <li><i class="fa fa-star"></i></li>
                                <li><i class="fa fa-star"></i></li>
                                <li><i class="fa fa-star"></i></li>
                                <li><i class="fa fa-star"></i></li>
                                <li><i class="fa fa-star-o"></i></li>
                            @endif

                            @if($testimonial->rating == '3')
                                <li>Project Ratting : </li>
                                <li><i class="fa fa-star"></i></li>
                                <li><i class="fa fa-star"></i></li>
                                <li><i class="fa fa-star"></i></li>
                                <li><i class="fa fa-star-o"></i></li>
                                <li><i class="fa fa-star-o"></i></li>
                            @endif

                            @if($testimonial->rating == '2')
                                <li>Project Ratting : </li>
                                <li><i class="fa fa-star"></i></li>
                                <li><i class="fa fa-star"></i></li>
                                <li><i class="fa fa-star-o"></i></li>
                                <li><i class="fa fa-star-o"></i></li>
                                <li><i class="fa fa-star-o"></i></li>
                            @endif

                            @if($testimonial->rating == '1')
                                <li>Project Ratting : </li>
                                <li><i class="fa fa-star"></i></li>
                                <li><i class="fa fa-star-o"></i></li>
                                <li><i class="fa fa-star-o"></i></li>
                                <li><i class="fa fa-star-o"></i></li>
                                <li><i class="fa fa-star-o"></i></li>
                            @endif

                            @if($testimonial->rating == '0')
                                <li>Project Ratting : </li>
                                <li><i class="fa fa-star-o"></i></li>
                                <li><i class="fa fa-star-o"></i></li>
                                <li><i class="fa fa-star-o"></i></li>
                                <li><i class="fa fa-star-o"></i></li>
                                <li><i class="fa fa-star-o"></i></li>
                            @endif
                            </ul>
                        
                        </div>
                        @endforeach
                    
                    </div>
                </div>
            </div>
        </div>
    </div>
    @endforeach
    <!-- testmonial-area end -->
    @endif


    @if($Clients->isEmpty())
    @else
    <!-- Our Clients -->
    <br><br>
    <section class="section-50 section-sm-90 section-lg-top-120">
     
     
        
        <div class="container">
          <section class="customer-logos slider">
            
            <?php $Clients = DB::table('clients')->get(); ?>
            @foreach($Clients as $clients)
            <div class="slide"><img src="{{url('/')}}/uploads/clients/{{$clients->image}}"></div>
            @endforeach
            
          </section>
        </div>
       
          
       
      
    </section>	
    <br><br>
    @endif

@endsection