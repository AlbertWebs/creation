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
                        <h2>{{$Services->title}}</h2>
                        <ul>
                            <li><a href="{{url('/')}}">Home</a></li>
                            <li>/</li>
                            <li><a href="{{url('/services')}}">Services</a></li>
                            <li>/</li>
                            <li>{{$Services->title}}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
    @endforeach
    <!-- breadcumb-area end -->

    {{--  --}}
    <div class="about-area3 ptb-120">
        <div class="container">
           
           
           <div class="row revarce-wrap">
              <div class="col-md-6" style="box-shadow: 0px 2px 10px rgb(0 0 0 / 20%);">
                 <div class="about-wrap3 about-wrap-2" >
                    <h2>{{$Services->title}}</h2>
                    {{-- <h3>We Are The Best Architecture & Interior Designer in 1988</h3> --}}
                    <p>{!!html_entity_decode($Services->content)!!}</p>
                    <a href="{{url('/')}}/contact" class="readmore-btn">Get Quote</a>
                 </div>
              </div>
              <div class="col-md-6">
                 <div class="about-img3" >
                    <img style="width:100% !important" src="{{url('/')}}/uploads/services/{{$Services->image_one}}" alt="{{$Services->title}}">
                 </div>
              </div>
           </div>
        </div>
     </div>

    {{--  --}}
    <!-- blog-area end -->
    
    <!-- quote-area start -->
@include('front.interior')
    <!-- quote-area end -->   
    <br><br>
    <section class="section-50 section-sm-90 section-lg-top-120 ">
     
     
        
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

@endsection