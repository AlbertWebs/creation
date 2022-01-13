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
                        <h2>{{$page_title}}</h2>
                        <ul>
                            <li><a href="{{url('/')}}">Home</a></li>
                            <li>/</li>
                            <li>Portfolio</li>
                            <li>/</li>
                            <li>{{$page_title}}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
    @endforeach
    <!-- breadcumb-area end -->
   
    <!-- spacial-area start -->
    <div class="spacial-area ptb-120">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="section-title text-center">
                        <h2>{{$page_title}}</h2>
                    </div>
                </div>
            </div>
            <div class="row">
                    <div class="col-lg-12 ">
                        <div class="blog-details-wrap">
                            
                            <blockquote>
                            <div class="">
                                <ul>
                                    <!-- <li>Delivered On : <i class="fa fa-time"></i>12/12/2011</li> -->
                                    <li>Client : <i class="fa fa-user"></i> {{$Portfolio->client}}</li>
                                    <!-- <li>Service Rendered: <i class="fa fa-cog"></i>{{$Portfolio->service}}</li> -->
                                </ul>
                            </div>
                            </blockquote>
                            
                        </div>
                    </div>
                <div class="col-lg-12 col-12">
                    <!-- .project-area start -->
                <div class="project-area project-area-without-gutter">
                
                    <div class="d-flex grid no-gutters">
                       @if($Portfolio->image_one == Null)

                       @else
                        <div class="col-lg-4 col-sm-6 col-12 project cat2 cat3">
                            <div class="project-wrap wow zoomIn" data-wow-duration="1s" data-wow-delay="100ms">
                                <img src="{{url('/')}}/uploads/portfolio/{{$Portfolio->image_one}}" alt="">
                                <div class="project-content">
                                    <a href="{{url('/')}}/uploads/portfolio/{{$Portfolio->image_one}}" class="popup"><i class="fa fa-search"></i></a>
                                    
                                </div>
                            </div>
                        </div>
                        @endif

                        @if($Portfolio->image_two == Null)

                        @else
                        <div class="col-lg-4 col-sm-6 col-12 project cat2 cat3">
                            <div class="project-wrap wow zoomIn" data-wow-duration="1s" data-wow-delay="200ms">
                                <img src="{{url('/')}}/uploads/portfolio/{{$Portfolio->image_two}}" alt="">
                                <div class="project-content">
                                    <a href="{{url('/')}}/uploads/portfolio/{{$Portfolio->image_two}}" class="popup"><i class="fa fa-search"></i></a>
                                    
                                </div>
                            </div>
                        </div>
                        @endif

                        @if($Portfolio->image_three == Null)

                        @else
                        <div class="col-lg-4 col-sm-6 col-12 project cat2 cat3">
                            <div class="project-wrap wow zoomIn" data-wow-duration="1s" data-wow-delay="300ms">
                                <img src="{{url('/')}}/uploads/portfolio/{{$Portfolio->image_three}}" alt="">
                                <div class="project-content">
                                    <a href="{{url('/')}}/uploads/portfolio/{{$Portfolio->image_three}}" class="popup"><i class="fa fa-search"></i></a>
                                    
                                </div>
                            </div>
                        </div>
                        @endif

                        @if($Portfolio->image_four == Null)

                        @else
                        <div class="col-lg-4 col-sm-6 col-12 project cat2 cat3">
                            <div class="project-wrap wow zoomIn" data-wow-duration="1s" data-wow-delay="400ms">
                                <img src="{{url('/')}}/uploads/portfolio/{{$Portfolio->image_four}}" alt="">
                                <div class="project-content">
                                    <a href="{{url('/')}}/uploads/portfolio/{{$Portfolio->image_four}}" class="popup"><i class="fa fa-search"></i></a>
                                    
                                </div>
                            </div>
                        </div>
                        @endif

                        @if($Portfolio->image_five == Null)

                        @else
                        <div class="col-lg-4 col-sm-6 col-12 project cat2 cat3">
                            <div class="project-wrap wow zoomIn" data-wow-duration="1s" data-wow-delay="500ms">
                                <img src="{{url('/')}}/uploads/portfolio/{{$Portfolio->image_five}}" alt="">
                                <div class="project-content">
                                    <a href="{{url('/')}}/uploads/portfolio/{{$Portfolio->image_five}}" class="popup"><i class="fa fa-search"></i></a>
                                    
                                </div>
                            </div>
                        </div>
                        @endif

                        @if($Portfolio->image_six == Null)

                        @else
                        <div class="col-lg-4 col-sm-6 col-12 project cat2 cat3">
                            <div class="project-wrap wow zoomIn" data-wow-duration="1s" data-wow-delay="600ms">
                                <img src="{{url('/')}}/uploads/portfolio/{{$Portfolio->image_six}}" alt="">
                                <div class="project-content">
                                    <a href="{{url('/')}}/uploads/portfolio/{{$Portfolio->image_six}}" class="popup"><i class="fa fa-search"></i></a>
                                    
                                </div>
                            </div>
                        </div>
                        @endif

                        @if($Portfolio->image_seven == Null)

                        @else
                        <div class="col-lg-4 col-sm-6 col-12 project cat2 cat3">
                            <div class="project-wrap wow zoomIn" data-wow-duration="1s" data-wow-delay="700ms">
                                <img src="{{url('/')}}/uploads/portfolio/{{$Portfolio->image_seven}}" alt="">
                                <div class="project-content">
                                    <a href="{{url('/')}}/uploads/portfolio/{{$Portfolio->image_seven}}" class="popup"><i class="fa fa-search"></i></a>
                                    
                                </div>
                            </div>
                        </div>
                        @endif

                        @if($Portfolio->image_eight == Null)

                        @else
                        <div class="col-lg-4 col-sm-6 col-12 project cat2 cat3">
                            <div class="project-wrap wow zoomIn" data-wow-duration="1s" data-wow-delay="800ms">
                                <img src="{{url('/')}}/uploads/portfolio/{{$Portfolio->image_eight}}" alt="">
                                <div class="project-content">
                                    <a href="{{url('/')}}/uploads/portfolio/{{$Portfolio->image_eight}}" class="popup"><i class="fa fa-search"></i></a>
                                    
                                </div>
                            </div>
                        </div>
                        @endif

                         @if($Portfolio->image_nine == Null)

                         @else
                         <div class="col-lg-4 col-sm-6 col-12 project cat2 cat3">
                            <div class="project-wrap wow zoomIn" data-wow-duration="1s" data-wow-delay="900ms">
                                <img src="{{url('/')}}/uploads/portfolio/{{$Portfolio->image_nine}}" alt="">
                                <div class="project-content">
                                    <a href="{{url('/')}}/uploads/portfolio/{{$Portfolio->image_nine}}" class="popup"><i class="fa fa-search"></i></a>
                                    
                                </div>
                            </div>
                         </div>
                         @endif

                         @if($Portfolio->image_ten == Null)

                         @else
                         <div class="col-lg-4 col-sm-6 col-12 project cat2 cat3">
                         <div class="project-wrap wow zoomIn" data-wow-duration="1s" data-wow-delay="1000ms">
                            <img src="{{url('/')}}/uploads/portfolio/{{$Portfolio->image_ten}}" alt="">
                            <div class="project-content">
                                <a href="{{url('/')}}/uploads/portfolio/{{$Portfolio->image_ten}}" class="popup"><i class="fa fa-search"></i></a>
                                
                            </div>
                         </div>
                         </div>
                         @endif

                          @if($Portfolio->image_eleven == Null)

                         @else
                         <div class="col-lg-4 col-sm-6 col-12 project cat2 cat3">
                         <div class="project-wrap wow zoomIn" data-wow-duration="1s" data-wow-delay="1200ms">
                         <img src="{{url('/')}}/uploads/portfolio/{{$Portfolio->image_eleven}}" alt="">
                         <div class="project-content">
                            <a href="{{url('/')}}/uploads/portfolio/{{$Portfolio->image_eleven}}" class="popup"><i class="fa fa-search"></i></a>
                            
                         </div>
                         </div>
                         </div>
                         @endif

                         @if($Portfolio->image_twelve == Null)

                        @else
                        <div class="col-lg-4 col-sm-6 col-12 project cat2 cat3">
                        <div class="project-wrap wow zoomIn" data-wow-duration="1s" data-wow-delay="14 00ms">
                        <img src="{{url('/')}}/uploads/portfolio/{{$Portfolio->image_twelve}}" alt="">
                        <div class="project-content">
                        <a href="{{url('/')}}/uploads/portfolio/{{$Portfolio->image_twelve}}" class="popup"><i class="fa fa-search"></i></a>
                        
                        </div>
                        </div>
                        </div>
                        @endif

                    </div>
                </div>
    <!-- .project-area end -->
                </div>
            </div>
        </div>
    </div>
    <!-- spacial-area end -->
   
@endsection