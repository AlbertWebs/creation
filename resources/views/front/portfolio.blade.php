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
                        <h2>Our Portfolio</h2>
                        <ul>
                            <li><a href="{{url('/')}}">Home</a></li>
                            <li>/</li>
                            <li>Portfolio</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
    @endforeach
    <!-- breadcumb-area end -->
    <!-- .project-area start -->
    <div class="project-area">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    
                    <!-- <div class="project-menu text-center mb-40">
                        <button class="active" data-filter="*">View All</button>
                        <?php $Cat = DB::table('services')->get() ?>
                        @foreach($Cat as $cat)
                        <button data-filter=".cat_{{$cat->id}}">{{$cat->title}}</button>
                        @endforeach
                      
                    </div> -->

                </div>
            </div>
            <div class="row grid" style="padding-top:100px; padding-bottom:50px;">

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

@endsection