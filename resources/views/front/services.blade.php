@extends('front.master')
@section('content')
 <!-- header-area end -->
    <!-- breadcumb-area start -->
 <!-- breadcumb-area start -->
 <?php $Banner = DB::table('banners')->where('name','page')->where('section','page')->get(); ?>
    @foreach($Banner as $banner)
    <div class="breadcumb-area black-opacity" style="background: url({{url('/')}}/uploads/banners/{{$banner->image}}) no-repeat center center / cover" >
      
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="breadcumb-wrap">
                        <h2>Service</h2>
                        <ul>
                            <li><a href="{{url('/')}}">Home</a></li>
                            <li>/</li>
                            <li>Service</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
    @endforeach
    <!-- breadcumb-area end -->
    @if($Services->isEmpty())

    @else
    <!-- service-area start -->
    <div class="service-area bg-1">
        <div class="container">
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
    <!-- service-area end -->
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
@endsection