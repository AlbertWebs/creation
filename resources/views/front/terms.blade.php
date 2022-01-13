@extends('front.master')
@section('content')
	 <!-- breadcumb-area start -->
      <!-- breadcumb-area start -->
    <?php $Banner = DB::table('banners')->where('name','page')->where('section','page')->get(); ?>
    @foreach($Banner as $banner)
    <div class="breadcumb-area black-opacity" style="background: url({{url('/')}}/uploads/banners/{{$banner->image}}) no-repeat center center / cover" >
      
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="breadcumb-wrap">
                        <h2>Terms & Conditions</h2>
                        <ul>
                            <li><a href="{{url('/')}}">Home</a></li>
                            <li>/</li>
                            <li>Terms and Conditions</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
    @endforeach
    <!-- breadcumb-area end -->
         
         <div class="testmonial-area testmonial-area2 ptb-120">
        <div class="container">
            <div class="row">
                <div class="col-12">
                @if($Term->isEmpty())
                        <center><h2>No terms Added</h2></center>
                @else
                @foreach($Term as $privacy)
                    <div class="section-title text-center">
                        <h2>{{$privacy->title}}</h2>
                        <p>{!!html_entity_decode($privacy->content)!!}</p>
                    </div>
                @endforeach
                @endif
                </div>
            </div>
          
        </div>
    </div>
    @endsection

     