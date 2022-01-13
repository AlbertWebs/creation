@extends('blog.master')
@section('content')
<div class="main-page-posts">
    <div class="wrap">
        <div class="wrap_float">
            <div class="post-items-list posts-grid">
                @foreach ($Blog as $Blog)
                <a href="{{url('/')}}/news-updates/{{$Blog->slung}}" class="post-item">
                     <img src="{{url('/')}}/uploads/blog/{{$Blog->image_one}}" alt="" class="post-bg-img">
                     <div class="post-tags">
                         <?php $Category = DB::table('category')->where('id',$Blog->cat)->get(); ?>
                         @foreach ($Category as $Category)
                         <div class="tag">{{$Category->cat}}</div>
                         @endforeach
                     </div>
                     <h3 class="post-title">
                         {{$Blog->title}}
                     </h3>
                     <div class="post-info">
                         <div class="post-author post-info-author">
                             <div class="author-image">
                                 <img src="{{asset('theme/blog/img/author.jpg')}}" alt="" class="image-cover">
                             </div>
                             <span>{{$Blog->author}}</span>
                         </div>
                         <div class="post-date post-info-date">
                             <?php 
                                 $RawDate = $Blog->created_at;
                                 $FormatDate = strtotime($RawDate);
                                 $Month = date('M',$FormatDate);
                                 $Date = date('D',$FormatDate);
                                 $Year = date('Y',$FormatDate);
                             ?>
                             {{$Date}} {{$Month}} {{$Year}}
                         </div>
                         <div class="post-views post-info-views">
                             3457
                         </div>
                     </div>
                 </a>
                @endforeach
             </div>
            {{-- <div class="show-more">
               <div class="show-more-btn">
                   <span>Show more</span>
               </div>
               <div class="loader">
                   <svg class="circular" viewBox="25 25 50 50">
                      <circle class="path" cx="50" cy="50" r="20" fill="none" stroke-width="2" stroke-miterlimit="10"/>
                    </svg>
               </div>
            </div> --}}
            
        </div>
    </div>
</div>

{{-- @include('blog.instagram') --}}
 @endsection