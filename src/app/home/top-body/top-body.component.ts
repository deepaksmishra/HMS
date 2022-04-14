import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-body',
  templateUrl: './top-body.component.html',
  styleUrls: ['./top-body.component.css']
})
export class TopBodyComponent implements OnInit {
  paymentHandler: any;

  constructor(){} ngOnInit() {
    this.invokeStripe();
  }
 
 makePayment(amount: any) {
  const paymentHandler = (<any>window).StripeCheckout.configure({
    key: 'pk_test_51KbMRrSDviSgyJL7HE5wmgxGWm25uh8MleQ0J7eP17wZ03r69tAti6A0JHg1NpcYinHbGOCJVbyz15CBC5GJGKgy005IStPqSD',
    locale: 'auto',
    token: function (stripeToken: any) {
      console.log(stripeToken);
      alert('Stripe token generated!');
    },
  });
  paymentHandler.open({
    name: 'Insurance',
    description: '5 Policies',
    amount: amount ,
  });
}

invokeStripe() {
  if (!window.document.getElementById('stripe-script')) {
    const script = window.document.createElement('script');
    script.id = 'stripe-script';
    script.type = 'text/javascript';
    script.src = 'https://checkout.stripe.com/checkout.js';
    script.onload = () => {
      this.paymentHandler = (<any>window).StripeCheckout.configure({
        key: 'pk_test_51KbMRrSDviSgyJL7HE5wmgxGWm25uh8MleQ0J7eP17wZ03r69tAti6A0JHg1NpcYinHbGOCJVbyz15CBC5GJGKgy005IStPqSD',
        locale: 'auto',
        token: function (stripeToken: any) {
          console.log(stripeToken);
          alert('Payment has been successfull!');
        },
      });
    };
    window.document.body.appendChild(script);
  }
 }
}
