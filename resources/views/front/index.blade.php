@extends('front.master')
@section('content')
		    <!-- slider-area start -->
    <div class="slider-area slider-area2">
            <div class="slider-active2 next-prev-style">
               @foreach($Slider as $slider)
                <div class="slider-items">
                    {{-- 1920 by 771 --}}
                    <img src="{{url('/')}}/uploads/slider/{{$slider->image}}" alt="Interior Designer - Creation Office Fitouts" class="slider">
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

    @include('front.interior')

    {{--  --}}
    {{-- <div class="spacial-area ptb-120 bg-1">
        <div class="container">
           <div class="row">
              <div class="col-12">
                 <div class="section-title text-center">
                    <h2>OUR SPECIALIZATION</h2>
                    <h3 style="max-width:500px; margin:0 auto;">We always endeavor to uphold the highest standards of art, design, planning, and project management while strictly adhering to the ethics and best practices for the benefit of our clients</h3>
                 </div>
              </div>
           </div>
           <div class="row">
              <div class="col-lg-6 d-lg-block d-none ">
                 <div class="spacial-img">
                    <img src="{{asset('theme/assets/images/spacial/1.jpg')}}" alt="Interior Designer In Nairobi, Kenya">
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
     </div> --}}
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
                        <img src="{{url('/')}}/uploads/portfolio/{{$portfolio->image_one}}" alt="{{$portfolio->title}} - Creation Office Fitouts">
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
    <div class="service-area bg-1">
        <div class="container">
        <div class="row">
            <div class="col-12">
                <div class="section-title text-center">
                    <h2>Services</h2>
                    <h3 style="max-width:500px; margin:0 auto;">Our team comprises of vibrant, creative, and exemplary interior designers whose sole objective is to deliver quality and excellence to our clients</h3>
                </div>
            </div>
        </div>
        <div class="row">
            <?php $countP = 0.5; ?>
            @foreach($Services as $service)
            <div class="col-sm-6 col-12 col-lg-4">
                <div class="service-wrap wow fadeInUp" data-wow-duration="1s" data-wow-delay="{{$countP}}s">
                    <div class="service-img">
                    <img  style="max-height:265px; min-height:265px" src="{{url('/')}}/uploads/services/{{$service->image_one}}" alt="{{$service->title}} Creation Office Fiouts">
                    </div>
                    <div class="service-content">
                    <h4>{{$service->title}}</h4>
                    <p>{{$service->meta}}</p>
                    <a href="{{url('/')}}/services/{{$service->slung}}">Read More</a>
                    </div>
                </div>
            </div>
            <?php $countP+0.5 ?>
            @endforeach
          
        </div>
        </div>
    </div>
    @endif


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
  
   

    <div class="brand-area brand-area2">
        <div class="container" >
           <div class="row">
            <?php $Clients = DB::table('clients')->orderBy('orders','ASC')->limit(50)->get(); ?>
            @foreach($Clients as $clients)
              <div class="col-lg-2 col-md-4 col-sm-6 col-xs-12 wow fadeInUp" data-wow-duration="700ms" data-wow-delay="300ms" style="margin:0 auto;">
                 <div class="brand-wrap text-center">
                    <img style="width:170px; height:120px;" src="{{url('/')}}/uploads/clients/{{$clients->image}}" alt="{{$clients->name}}">
                    <h6 style="max-width:180px; margin:0 auto; margin-top:5px; margin-bottom:5px; font-weight:600">{{$clients->name}}</h6>
                 </div>
              </div>
             @endforeach
              
           </div>
        </div>
     </div>
     @endif

@endsection