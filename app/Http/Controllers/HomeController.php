<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use Illuminate\Support\Facades\DB;

use App\ReplyMessage;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Redirect;

use Storage;

use Mail;

use Hash;

use Session;

use App\Product;

use App\Subscriber;

use App\Services;

use App\Testimonial;

use App\Portfolio;

use App\Slider;

use App\Service_Rendered;

use App\Daily;

use App\Blog;

use App\Admin;

use App\Term;

use App\Privacy;

use App\Message;

use App\Notifications;

use App\ServiceRequest;

use App\Quote;



use Artesaos\SEOTools\Facades\SEOMeta;
use Artesaos\SEOTools\Facades\OpenGraph;
use Artesaos\SEOTools\Facades\TwitterCard;
use Artesaos\SEOTools\Facades\JsonLd;




class HomeController extends Controller
{
     /**
     * @return \Illuminate\View\View
     */

    public function index()
    { 
        SEOMeta::setTitle('Best Office Fitouts Contractor in Kenya - Creation Office Fitouts');
        SEOMeta::setDescription('Interior Design Company in Nairobi - We are an Interior fitting contractor in Nairobi - We are professionals in Construction, Refurbishments, Ceiling, Flooring');
        SEOMeta::setCanonical(''.url('/').'/');

        OpenGraph::setDescription('Interior Design Company in Nairobi - We are an Interior fitting contractor in Nairobi - We are professionals in Construction, Refurbishments, Ceiling, Flooring');
        OpenGraph::setTitle('Creation Office Fitouts - Best office fitouts contractor in Kenya, Interior designer in kenya');
        OpenGraph::setUrl(''.url('/').'/');
        OpenGraph::addProperty('type', 'articles');
        $SiteSettings = DB::table('sitesettings')->get();
        
        TwitterCard::setTitle('Best Office Fitouts Contractor in Kenya - Creation Office Fitouts');
        TwitterCard::setSite('@creationoffice1');

        
        
        

        $About = DB::table('about')->get();
        $Slider = Slider::all();
        $Blog = DB::table('blog')->paginate(3);
        $Portfolio = DB::table('portfolio')->orderByDesc('id')->paginate(9);
        $Services = DB::table('services')->inRandomOrder()->paginate(6);
        $Testimonial = Testimonial::all();
        $Clients = DB::table('clients')->inRandomOrder()->paginate(20);
        $SiteSettings = DB::table('sitesettings')->get();
       
        $sitename = config('app.name', 'Laravel');
        $page_title = 'Welcome To '.$sitename.'';
        return view('front.index',compact('About','SiteSettings','page_title','Testimonial','Slider','Services','Portfolio','Clients'));
    }

   
   

    public function portfolio()
    {
        SEOMeta::setTitle('Projects - Creation Office Fitouts -Interior Designers in Nairobi');
        SEOMeta::setDescription('Interior Design Company in Nairobi - We are an interior design firm, based in Kenya.  We always endeavor to uphold the highest standards of art, design, planning, and project management while strictly adhering to the ethics and best practices for the benefit of our clients - Creation Office Fitouts');
        SEOMeta::setCanonical(''.url('/').'/portfolio');

        OpenGraph::setDescription('Interior Design Company in Nairobi - We are an interior design firm, based in Kenya.  We always endeavor to uphold the highest standards of art, design, planning, and project management while strictly adhering to the ethics and best practices for the benefit of our clients - Creation Office Fitouts');
        OpenGraph::setTitle('Projects - Creation Office Fitouts -Interior Designers in Nairobi');
        OpenGraph::setUrl(''.url('/').'/portfolio');
        OpenGraph::addProperty('type', 'articles');
        $SiteSettings = DB::table('sitesettings')->get();
        
        TwitterCard::setTitle('Projects - Creation Office Fitouts -Interior Designers in Nairobi');
        TwitterCard::setSite('@creationoffice1');

        $Portfolio = Portfolio::all();
        $page_title = 'Our Works';
        return view('front.portfolio',compact('Portfolio','page_title'));
    }

    public function portfolio_single($name)
    {
        $PortfolioName = DB::table('portfolio')->where('slung',$name)->get();
        foreach ($PortfolioName as $key => $portfolioname) {
            $PagerTitle = $portfolioname->title;
            SEOMeta::setTitle(''.$portfolioname->title.' - Creation Office Fitouts - Best office fitouts in Kenya');
            SEOMeta::setDescription('Interior Design Company in Nairobi - We are an interior design firm, based in Kenya.  We always endeavor to uphold the highest standards of art, design, planning, and project management while strictly adhering to the ethics and best practices for the benefit of our clients - Creation Office Fitouts');
            SEOMeta::setCanonical(''.url('/').'/portfolio/'.$name.'');

            OpenGraph::setDescription('Interior Design Company in Nairobi - We are an interior design firm, based in Kenya.  We always endeavor to uphold the highest standards of art, design, planning, and project management while strictly adhering to the ethics and best practices for the benefit of our clients - Creation Office Fitouts');
            OpenGraph::setTitle(''.$portfolioname->title.' - Creation Office Fitouts - Best office fitouts in Kenya');
            OpenGraph::setUrl(''.url('/').'/portfolio/'.$name.'');
            OpenGraph::addProperty('type', 'articles');
            $SiteSettings = DB::table('sitesettings')->get();
        
            TwitterCard::setTitle(''.$portfolioname->title.' - Creation Office Fitouts - Best office fitouts in Kenya');
            TwitterCard::setSite('@creationoffice1');

            $Portfolio = Portfolio::find($portfolioname->id);
            $page_title = $portfolioname->title;
            return view('front.portfolio_single',compact('Portfolio','page_title'));
        }
        
        
    }

    public function contact()
    {
        SEOMeta::setTitle('Contact Us | Creation Office Fitouts - Interior Designer in Nairobi');
        SEOMeta::setDescription('Interior Design Company in Nairobi - We are an interior design firm, based in Kenya.  We always endeavor to uphold the highest standards of art, design, planning, and project management while strictly adhering to the ethics and best practices for the benefit of our clients - Creation Office Fitouts');
        SEOMeta::setCanonical(''.url('/').'/contact');

        OpenGraph::setDescription('Interior Design Company in Nairobi - We are an interior design firm, based in Kenya.  We always endeavor to uphold the highest standards of art, design, planning, and project management while strictly adhering to the ethics and best practices for the benefit of our clients - Creation Office Fitouts');
        OpenGraph::setTitle('Contact Us | Creation Office Fitouts - Interior Designer in Nairobi');
        OpenGraph::setUrl(''.url('/').'/contact');
        OpenGraph::addProperty('type', 'articles');
        $SiteSettings = DB::table('sitesettings')->get();
        
        TwitterCard::setTitle('Contact Us | Creation Office Fitouts - Interior Designer in Nairobi');
        TwitterCard::setSite('@creationoffice1');

        $page_title = 'Contact Us';
        $SiteSettings = DB::table('sitesettings')->get();
        return view('front.contact',compact('page_title','SiteSettings'));
    }

    public function about()
    {
        SEOMeta::setTitle('About Us | Best office fitouts contractor in Kenya  |  Creation Office Fitouts');
        SEOMeta::setDescription('Interior Design Company in Nairobi - We are an interior design firm, based in Kenya.  We always endeavor to uphold the highest standards of art, design, planning, and project management while strictly adhering to the ethics and best practices for the benefit of our clients - Creation Office Fitouts');
        SEOMeta::setCanonical(''.url('/').'/about');

        OpenGraph::setDescription('Interior Design Company in Nairobi - We are an interior design firm, based in Kenya.  We always endeavor to uphold the highest standards of art, design, planning, and project management while strictly adhering to the ethics and best practices for the benefit of our clients - Creation Office Fitouts');
        OpenGraph::setTitle('About Us | Best office fitouts contractor in Kenya  |  Creation Office Fitouts');
        OpenGraph::setUrl(''.url('/').'/about');
        OpenGraph::addProperty('type', 'articles');
        $SiteSettings = DB::table('sitesettings')->get();
        
        TwitterCard::setTitle('About Us | Best office fitouts contractor in Kenya  |  Creation Office Fitouts');
        TwitterCard::setSite('@creationoffice1');

        $Clients = DB::table('clients')->inRandomOrder()->paginate(20);
        $Testimonial = Testimonial::all();
        $Admin = Admin::all();
        $About = DB::table('about')->get(); 
        $SiteSettings = DB::table('sitesettings')->get();
        $Services = Services::all();
        $page_title = 'About Us';
        return view('front.about',compact('page_title','Clients','Testimonial','About','Admin'));
    }

    public function terms()
    {
        SEOMeta::setTitle('Terms and Conditions | Creation Office Fitouts - Best office fitouts contractor in Kenya');
        SEOMeta::setDescription('Interior Design Company in Nairobi - We are an interior design firm, based in Kenya.  We always endeavor to uphold the highest standards of art, design, planning, and project management while strictly adhering to the ethics and best practices for the benefit of our clients - Creation Office Fitouts');
        SEOMeta::setCanonical(''.url('/').'/terms');

        OpenGraph::setDescription('Interior Design Company in Nairobi - We are an interior design firm, based in Kenya.  We always endeavor to uphold the highest standards of art, design, planning, and project management while strictly adhering to the ethics and best practices for the benefit of our clients - Creation Office Fitouts');
        OpenGraph::setTitle('Terms and Conditions | Creation Office Fitouts - Best office fitouts contractor in Kenya');
        OpenGraph::setUrl(''.url('/').'/terms');
        OpenGraph::addProperty('type', 'articles');
        $SiteSettings = DB::table('sitesettings')->get();
        
        TwitterCard::setTitle('Terms and Conditions | Creation Office Fitouts - Best office fitouts contractor in Kenya');
        TwitterCard::setSite('@creationoffice1');
        $Term = Term::all();
        $page_title = 'Terms Of Service';
        return view('front.terms',compact('page_title','Term'));
    }

    public function privacy()
    {
        SEOMeta::setTitle('Privacy Policy | Creation Office Fitouts - Best office fitouts contractor in Kenya');
        SEOMeta::setDescription('Interior Design Company in Nairobi - We are an interior design firm, based in Kenya.  We always endeavor to uphold the highest standards of art, design, planning, and project management while strictly adhering to the ethics and best practices for the benefit of our clients - Creation Office Fitouts');
        SEOMeta::setCanonical(''.url('/').'/privacy');

        OpenGraph::setDescription('Interior Design Company in Nairobi - We are an interior design firm, based in Kenya.  We always endeavor to uphold the highest standards of art, design, planning, and project management while strictly adhering to the ethics and best practices for the benefit of our clients - Creation Office Fitouts');
        OpenGraph::setTitle('Privacy Policy | Creation Office Fitouts - Best office fitouts contractor in Kenya');
        OpenGraph::setUrl(''.url('/').'/privacy');
        OpenGraph::addProperty('type', 'articles');
        $SiteSettings = DB::table('sitesettings')->get();
        
        TwitterCard::setTitle('Privacy Policy | Creation Office Fitouts - Best office fitouts contractor in Kenya');
        TwitterCard::setSite('@creationoffice1');
        $Privacy = Privacy::all();
        $page_title = 'Privacy Policy';
        return view('front.privacy',compact('page_title','Privacy'));
    }

    public function copyright()
    {
        SEOMeta::setTitle('Copyright Statement | Creation Office Fitouts - Best office fitouts contractor in Kenya');
        SEOMeta::setDescription('Interior Design Company in Nairobi - We are an interior design firm, based in Kenya.  We always endeavor to uphold the highest standards of art, design, planning, and project management while strictly adhering to the ethics and best practices for the benefit of our clients - Creation Office Fitouts');
        SEOMeta::setCanonical(''.url('/').'/copyright');

        OpenGraph::setDescription('Interior Design Company in Nairobi - We are an interior design firm, based in Kenya.  We always endeavor to uphold the highest standards of art, design, planning, and project management while strictly adhering to the ethics and best practices for the benefit of our clients - Creation Office Fitouts');
        OpenGraph::setTitle('Copyright Statement | Creation Office Fitouts - Best office fitouts contractor in Kenya');
        OpenGraph::setUrl(''.url('/').'/copyright');
        OpenGraph::addProperty('type', 'articles');
        $SiteSettings = DB::table('sitesettings')->get();
        
        TwitterCard::setTitle('Copyright Statement | Creation Office Fitouts - Best office fitouts contractor in Kenya');
        TwitterCard::setSite('@creationoffice1');

        $Copyright = DB::table('copyright')->get();
        $page_title = 'Copyright Statement';
        return view('front.copyright',compact('page_title','Copyright'));
    }

    public function services()
    {
        SEOMeta::setTitle('Services | Creation Office Fitouts - Best Interior fitting contractor in Nairobi');
        SEOMeta::setDescription('Interior Design Company in Nairobi - Interior Architecture , Construction, Refurbishment, Partitioning , Ceiling & Floors, Furniture Supplies');
        SEOMeta::setCanonical(''.url('/').'/services');

        OpenGraph::setDescription('Interior Design Company in Nairobi - Interior Architecture , Construction, Refurbishment, Partitioning , Ceiling & Floors, Furniture Supplies');
        OpenGraph::setTitle('Services | Creation Office Fitouts - Best Interior fitting contractor in Nairobi');
        OpenGraph::setUrl(''.url('/').'/services');
        OpenGraph::addProperty('type', 'articles');
        $SiteSettings = DB::table('sitesettings')->get();
        
        TwitterCard::setTitle('Services | Creation Office Fitouts - Best Interior fitting contractor in Nairobi');
        TwitterCard::setSite('@creationoffice1');

        $Services = Services::all();
        $page_title = 'Our Services';
        return view('front.services',compact('Services','page_title'));
    }

    public function service($slung)
    {
        $Services = Services::where('slung',$slung)->get();
        foreach($Services as $service){
            $page_title = $service->title;
            
            SEOMeta::setTitle(''.$page_title.' | Contractor in Kenya');
            SEOMeta::setDescription('Interior Design Company in Nairobi - Interior Architecture , Construction, Refurbishment, Partitioning , Ceiling & Floors, Furniture Supplies');
            SEOMeta::setCanonical(''.url('/').'/services/'.$slung.'');

            OpenGraph::setDescription('Interior Design Company in Nairobi - Interior Architecture , Construction, Refurbishment, Partitioning , Ceiling & Floors, Furniture Supplies');
            OpenGraph::setTitle(''.$page_title.' | Contractor in Kenya');
            OpenGraph::setUrl(''.url('/').'/services/'.$slung.'');
            OpenGraph::addProperty('type', 'articles');

            $SiteSettings = DB::table('sitesettings')->get();
            
            TwitterCard::setTitle(''.$page_title.' | Contractor in Kenya');
            TwitterCard::setSite('@creationoffice1');

            $Services = Services::find($service->id);
            $page_title = 'Our Services';
            return view('front.service',compact('Services','page_title'));
        }
        
    }

  

    public function subscribe(Request $request){
        $FindMail = DB::table('subscribers')->where('email',$request->email)->get();
        $Countmails = count($FindMail);
        if($Countmails == 0){
            $email = $request->email;
            $Subscriber = new Subscriber;
            $Subscriber->email = $email;
            $Subscriber->save();
            return "You have successfully subscribed to our news letters";
        }else{
            return "You are already in our subscribers list thank you for staying with us";
        }
        
    
        
    }
    public function request_quote(){
        $page_title = 'Request Quote';
        $SiteSettings = DB::table('sitesettings')->get();
        return view('front.request_quote',compact('page_title','SiteSettings'));
    }
    public function servicerequest($id){
        $page_title = 'Order Service';
        $Pricings = DB::table('pricing')->where('id',$id)->get();
        return view('front.servicerequest',compact('page_title','Pricings'));
    }
    
    public function service_request(Request $request){
        $name = $request->name;
        $email = $request->email;
        $id = $request->id;
        $service = $request->service;
        $price = $request->price;
        $content = $request->content;
        $budget = $request->budget;

        $ServiceRequest = new ServiceRequest;
        $ServiceRequest->name = $name;
        $ServiceRequest->email = $email;
        $ServiceRequest->serviceID = $id;
        $ServiceRequest->service = $service;
        $ServiceRequest->content = $content;
        $ServiceRequest->price  = $price;
        $ServiceRequest->budget = $budget;
        $ServiceRequest->save();
        ReplyMessage::mailrequest($name,$email,$service,$price,$content,$budget);
        return "Your Request Has Been Received,If we dont respond within an hour kindly contact us through our contact form,call us or use the live chat";
    }

    public function checkEmail(Request $request){
        $email = $request->input('email');
        $isExists = \App\User::where('email',$email)->first();
        //Create The Logics To return AJAX
        if(empty($isExists)) {
            return "";
        }else{
            return "The Email Is already in use by another User";
        }
    }

    public function quote_request(Request $request){
        $name = $request->name;
        $email = $request->email;
        $service = $request->service;
        $content = $request->content;
        $Quote = new Quote;
        $Quote->name = $name;
        $Quote->email = $email;
        $Quote->service = $service;
        $Quote->content = $request->content;
        $Quote->save();
        $price = 'Quote Request';
        $budget = 'Quote Request';
        ReplyMessage::mailrequest($name,$email,$service,$price,$content,$budget);
        return "Your Request Has Been Received";

    }

    public function searchsite(Request $request){
        
        $Services = DB::table('services')
        ->where('title','like', '%'.$request->search.'%')->get();
        $page_title = $request->search;
        return view('front.services',compact('page_title','Services','SubCategory'));
    }

    public function commingsoon(){
        $page_title = 'We will be Back Shortly';
        return view('front.commingsoon',compact('page_title'));
    }
    public function submitMessage(Request $request){
        $email = $request->email;
        $name = $request->name;
        $message = $request->message;
        $subject = $request->subject;
        
        $Message = new Message;
        $Message->name = $name;
        $Message->email = $email;
        $Message->subject = $subject;
        $Message->content = $message;

        $Message->save();
        $Notifications = new Notifications;
        $Notifications->type = 'Message';
        $Notifications->content = 'You have a new Message';
        $Notifications->save();

        $reply = 'You have Received a Message From Creations Office Fitouts, Login To the admins Panel to reply';
        $name = 'Admin';
        $id = 0;
        
        $email = 'info@creationltd.co.ke';
        $subject = 'New Message';
        ReplyMessage::SendMessage($reply,$subject,$name,$email,$id);

        Session::flash('message', "Your Message Has Been Sent");
        return Redirect::back();
    }

    public function slung(){
        $Portfolio = Services::all();
        foreach($Portfolio as $folio){
            $slung = Str::slug($folio->title);
            $updateDetails = array (
                'slung' => $slung,
            );
        DB::table('services')->where('id',$folio->id)->update($updateDetails);
        }
        echo "done";
    }
}
