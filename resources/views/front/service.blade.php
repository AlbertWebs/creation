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
    <!-- blog-area start -->
    <div class="blog-area blog-details-area">
        <div class="container">
            <div class="row">
                <div class="col-lg-8">
                    
                    <div class="blog-details-wrap">
                        <p>{!!html_entity_decode($Services->content)!!}</p>
                     </div>
                </div>
                <div class="col-lg-4 col-md-6 col-12">
                    <aside class="sidebar-wrap">
                      
                        <div class="widget sidebar-menu">
                            <h3 class="widget-title">Other Services</h3>
                            <ul>
                                <?php $Services = DB::table('services')->inRandomOrder()->get(); ?>
                                @foreach($Services as $Service)
                                <li><a href="{{url('/')}}/service/{{$Service->id}}">{{$Service->title}}</a></li>
                                @endforeach
                                
                            </ul>
                        </div>
                       
                        
                    </aside>
                </div>
            </div>
        </div>
    </div>
    <!-- blog-area end -->
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
    <!-- quote-area start -->
@include('front.interior')
    <!-- quote-area end -->     

@endsection