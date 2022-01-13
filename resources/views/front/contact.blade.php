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
                        <h2>Contact Us</h2>
                        <ul>
                            <li><a href="{{url('/')}}">Home</a></li>
                            <li>/</li>
                            <li>Contact</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
    @endforeach
    <!-- breadcumb-area end -->
    <!-- contact-area start -->
    <div class="contact-area pt-120">
        <div class="container">
            <div class="row">
                <div class="col-lg-8 col-12">
                    <div class="contact-form">
                        @if(Session::has('message'))
							<div class="alert alert-success">{{ Session::get('message') }}</div>
						@endif
                        <form action="{{url('/submitMessage')}}" method="post">
                        <input type="hidden" name="_token" value="{{ csrf_token() }}">
                            <div class="row">
                                <div class="col-md-6 col-12">
                                    <input type="text" placeholder="Name" id="fname" name="name">
                                </div>
                                <div class="col-md-6 col-12">
                                    <input type="text" placeholder="Email" id="email" name="email">
                                </div>
                                <div class="col-12">
                                    <input type="text" placeholder="Subject" id="subject" name="subject">
                                </div>
                                <div class="col-12">
                                    <textarea class="contact-textarea" placeholder="Message" id="msg" name="message"></textarea>
                                </div>
                                <div class="col-12">
                                    <button type="submit" id="submit" class="cont-submit btn-contact btn-style" name="submit"><i class="fa fa-send"></i> SEND MESSAGE</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 col-12">
                    <div class="contact-wrap">
                        <ul>
                        <?php $Sitesettings = DB::table('sitesettings')->get(); ?>
                        @foreach($Sitesettings as $Settings)
                            <li>
                                <i class="fa fa-phone"></i> Phone number
                                <p>
                                    <span>{{$Settings->mobile}}</span>
                                    <span>{{$Settings->mobile_one}}</span>
                                </p>
                            </li>
                            <li>
                                <i class="fa fa-envelope"></i> Email
                                <p>
                                    <span>{{$Settings->email}}</span>
                                    <span>{{$Settings->email_one}}</span>
                                </p>
                            </li>
                            <li>
                                <i class="fa fa-map-marker"></i> Location
                                <p>
                                    <span>{{$Settings->location}}</span>
                                </p>
                            </li>
                        @endforeach
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <br><br>
        <div>
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15955.333143690317!2d36.7995943!3d-1.2731973!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xe07bbf266ae12aee!2sCreation%20Office%20Fitouts!5e0!3m2!1sen!2ske!4v1569746153527!5m2!1sen!2ske" width="100%" height="450" frameborder="0" style="border:0;" allowfullscreen=""></iframe>
        </div>
    </div>
    <!-- footer-area start -->
@endsection