@extends('front.master')
@section('content')

 



    @if($Clients->isEmpty())
    @else
    <!-- Our Clients -->
  
   

    <div class="brand-area brand-area2">
        <div class="container" >
           <div class="row">
            <?php $Clients = DB::table('clients')->orderBy('orders','ASC')->limit(100)->get(); ?>
            @foreach($Clients as $clients)
              <div class="col-lg-2 col-md-4 col-sm-6 col-xs-6 wow fadeInUp" data-wow-duration="700ms" data-wow-delay="300ms" style="margin:0 auto;">
                 <div class="brand-wrap text-center">
                    <img style="width:170px; height:120px; border:2px solid #D3D3D3" src="{{url('/')}}/uploads/clients/{{$clients->image}}" alt="{{$clients->name}}">
                    <h6 style="max-width:180px; margin:0 auto; margin-top:5px; margin-bottom:5px; font-weight:600">{{$clients->name}}</h6>
                 </div>
              </div>
             @endforeach
           </div>
        </div>
     </div>
     @endif
@endsection