@extends('front.master')
@section('content')
    <!-- breadcumb-area start -->
    <?php $Banner = DB::table('banners')->where('name','page')->where('section','page')->get(); ?>
    @foreach($Banner as $banner)
    <div class="breadcumb-area black-opacity" style="background: url({{url('/')}}/uploads/banners/{{$banner->image}}) no-repeat center center / cover" >
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="breadcumb-wrap">
                        <h2>About Us</h2>
                        <ul>
                            <li><a href="{{url('/')}}">Home</a></li>
                            <li>/</li>
                            <li>About Us</li>
                        </ul>
                    </div>
                </div> 
            </div>
        </div>
    </div>
    @endforeach
    <!-- breadcumb-area end -->
    <!-- ablout-area start -->
    @foreach($About as $about)
    <div class="about-area about-area2 ptb-120">
        <div class="container">
            <div class="row">
                <div class="col-lg-6 col-12 d-none d-sm-block">
                    <div class="about-img2 wow fadeInUp" data-wow-duration="1s" data-wow-delay="200ms">
                        <img src="{{url('/')}}/uploads/images/{{$about->image}}" alt="">
                        <!-- <div class="about-images">
                            <img src="{{asset('theme/assets/images/about/3.jpg')}}" alt="">
                            <a class="video-popup" href="https://www.youtube.com/watch?v=FjGu7QyfueY"><i class="fa fa-play"></i></a>
                        </div> -->
                    </div>
                </div>
                <div class="col-lg-6 col-12">
                    <div class="about-wrap wow fadeInUp" data-wow-duration="1s" data-wow-delay="600ms">
                        <h2>About Us</h2>
                        
                        <p>{!!html_entity_decode($about->content)!!}</p>
                        <a class="wow fadeInRight" data-wow-duration="1s" data-wow-delay="800ms" href="{{url('/portfolio')}}" class="readmore-btn">Our Portfolio</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    @endforeach
    <!-- about-area end -->

    @include('front.interior')
 
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
                        <h2>Customer Feedback</h2>
                        <h3>This is what some of our customers say about us</h3>
                    </div>
                </div>
            </div>
    
            <div class="row revarce-wrap">
                <div class="col-lg-7 col-md-6 col-12">
                    <div class="test-content-active">
                        @foreach($Testimonial as $testimonial) 
                            <div class="test-wrap">
                                <i class="fa fa-quote-left"></i>
                                <p>{!!html_entity_decode($testimonial->content)!!}</p>
                                <h4>{{$testimonial->name}}</h4>
                                <span>{{$testimonial->position}} @ {{$testimonial->company}}</span>
                            </div>
                        @endforeach
                    
                    </div>
                </div>
                <div class="col-lg-5 col-md-6">
                    <div class="test-img-active">
                    @foreach($Testimonial as $testimonial)
                        <div class="test-img">
                            <img src="{{url('/')}}/uploads/testimonials/{{$testimonial->image}}" alt="">
                            <ul>
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
    <!-- .brand-area end -->	
    @endif

@endsection