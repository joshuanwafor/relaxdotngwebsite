import { marked } from 'marked';
import TableOfContents from '../components/TableOfContents';

// Configure marked options for better formatting
marked.setOptions({
  breaks: true,
  gfm: true,
});

export const metadata = {
  title: 'Delivery & Returns Policy - Relax.ng',
  description: 'Learn about our delivery and return policies for laundry, cleaning, and home essentials services at Relax.ng.',
  keywords: 'delivery policy, returns, refunds, Relax.ng, Northern Nigeria, laundry delivery, cleaning services',
};

export default function DeliveryReturnsPage() {
  return (
    <div className="bg-white relative">
      <TableOfContents content={content} />
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-secondary/20 to-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-headline text-4xl md:text-5xl font-bold text-primary mb-6">
            Delivery & Returns Policy
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Everything you need to know about our delivery, pickup, and return procedures
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none prose-headings:text-primary prose-a:text-accent prose-strong:text-primary prose-p:text-gray-700 prose-p:leading-relaxed prose-li:text-gray-700 prose-li:leading-relaxed prose-h1:mb-8 prose-h2:mt-12 prose-h2:mb-6 prose-h3:mt-8 prose-h3:mb-4 prose-p:mb-6 prose-ul:mb-6 prose-ol:mb-6 prose-blockquote:border-l-accent prose-blockquote:bg-secondary/10 prose-blockquote:py-4 prose-blockquote:px-6 prose-blockquote:rounded-r-lg prose-code:bg-gray-100 prose-code:px-2 prose-code:py-1 prose-code:rounded prose-code:text-sm">
            <div 
              className="formatted-content"
              dangerouslySetInnerHTML={{ __html: marked(content) }} 
            />
          </div>
        </div>
      </section>
    </div>
  );
}

const content = `
# Delivery & Returns Policy

**Last Updated:** January 24, 2026

Welcome to Relax.ng's Delivery & Returns Policy. This policy outlines how we handle deliveries, pickups, and returns for all our services including laundry, home cleaning, and home essentials delivery across Northern Nigeria.

## Table of Contents

1. [Service Areas & Delivery Coverage](#service-areas--delivery-coverage)
2. [Delivery Times & Scheduling](#delivery-times--scheduling)
3. [Pickup Services](#pickup-services)
4. [Delivery Procedures](#delivery-procedures)
5. [Returns & Exchanges](#returns--exchanges)
6. [Refund Policy](#refund-policy)
7. [Damaged or Missing Items](#damaged-or-missing-items)
8. [Cancellation Policy](#cancellation-policy)
9. [Special Circumstances](#special-circumstances)
10. [Contact Information](#contact-information)

## 1. Service Areas & Delivery Coverage<a id="service-areas--delivery-coverage"></a>

### Coverage Areas

Relax.ng currently provides services in the following areas across Northern Nigeria:

- **Kaduna State**: Kaduna metropolis and surrounding areas
- **Kano State**: Kano metropolis and select neighborhoods
- **Abuja (FCT)**: Major districts and residential areas

### Delivery Zones

We organize our service areas into delivery zones:

- **Zone A (Standard)**: Central areas with regular daily service
- **Zone B (Extended)**: Suburban areas with scheduled service days
- **Zone C (Premium)**: Remote areas requiring advance booking

**Note:** Delivery fees and timelines may vary based on your zone. You can check your zone during the booking process in our mobile app or by contacting our customer service team.

### Service Expansion

We are continuously expanding our coverage areas. To request service in a new area or to be notified when we expand to your location, please contact us at hello@relax.ng.

## 2. Delivery Times & Scheduling<a id="delivery-times--scheduling"></a>

### Standard Delivery Windows

We offer flexible delivery windows to accommodate your schedule:

- **Morning Slot**: 8:00 AM - 12:00 PM
- **Afternoon Slot**: 12:00 PM - 4:00 PM
- **Evening Slot**: 4:00 PM - 8:00 PM

### Service-Specific Timelines

#### Laundry Services

- **Express Service**: 24-hour turnaround
- **Standard Wash**: 48-hour turnaround
- **Premium Care** (delicates, dry cleaning): 72-hour turnaround
- **Bulk/Commercial**: 3-5 business days

#### Home Cleaning Services

- **One-Time Cleaning**: Scheduled at your preferred date and time
- **Regular Cleaning**: Recurring schedule (weekly, bi-weekly, monthly)
- **Deep Cleaning**: Requires advance booking (minimum 48 hours notice)
- **Move-In/Move-Out**: Requires advance booking (minimum 72 hours notice)

#### Home Essentials Delivery

- **Same-Day Delivery**: Orders placed before 2:00 PM (Zone A only)
- **Next-Day Delivery**: Orders placed after 2:00 PM
- **Scheduled Delivery**: Choose your preferred delivery date up to 7 days in advance

### Delivery Notifications

You will receive notifications at every stage:

1. **Order Confirmation**: Immediate confirmation via SMS and app notification
2. **Service Provider Assignment**: When a provider is assigned to your order
3. **On the Way**: 30-60 minutes before arrival
4. **Arrival**: When the service provider arrives at your location
5. **Completion**: When service is completed or delivery is made

### Rescheduling

You can reschedule your delivery or pickup:

- **Free Rescheduling**: Up to 24 hours before scheduled time
- **Late Rescheduling**: 6-24 hours before (may incur a small fee)
- **Last-Minute Changes**: Less than 6 hours (subject to availability and fees)

To reschedule, use the Relax.ng mobile app or contact our customer service team.

## 3. Pickup Services<a id="pickup-services"></a>

### How Pickup Works

For laundry services, we offer convenient pickup at your doorstep:

1. **Schedule Pickup**: Select your preferred pickup time when booking
2. **Prepare Items**: Have your laundry ready in a bag or basket
3. **Service Provider Arrival**: Our vetted provider will arrive during your selected window
4. **Item Count & Documentation**: Items are counted and documented
5. **Special Instructions**: Communicate any special care requirements
6. **Receipt**: You'll receive a digital receipt with item count and service details

### Pickup Requirements

- **Accessibility**: Ensure the pickup location is accessible
- **Contact Person**: Someone must be available to hand over items
- **Item Preparation**: Items should be ready for pickup
- **Special Items**: Notify us in advance of any special care items

### Missed Pickups

If our service provider arrives and cannot complete the pickup:

- **First Attempt**: We'll contact you and attempt to wait (up to 15 minutes)
- **Rescheduling**: Automatic rescheduling to the next available slot
- **Repeated Misses**: After 2 missed pickups, a rescheduling fee may apply

### Alternative Pickup Options

- **Drop-Off Points**: Selected partner locations for your convenience
- **Workplace Pickup**: Available for corporate accounts
- **Contactless Pickup**: Leave items in a designated secure location

## 4. Delivery Procedures<a id="delivery-procedures"></a>

### Standard Delivery Process

1. **Notification**: You'll receive advance notice of delivery
2. **Arrival**: Service provider arrives during scheduled window
3. **Verification**: Verify your identity and order details
4. **Inspection**: Opportunity to inspect items before acceptance
5. **Confirmation**: Confirm receipt in the app
6. **Feedback**: Rate your experience

### Delivery Requirements

#### For Laundry Returns

- Items are delivered cleaned, folded, and packaged
- Hangers provided for items requiring hanging
- Protective packaging for delicate items
- All items from your order are accounted for

#### For Home Essentials

- Items delivered in original packaging or secure bags
- Temperature-sensitive items in appropriate containers
- Fragile items clearly marked and handled with care
- Receipt provided for verification

### Contactless Delivery

We offer contactless delivery options:

- **Doorstep Drop**: Items left at your doorstep with photo confirmation
- **Secure Location**: Delivery to a specified secure location
- **Building Reception**: Delivery to building reception or security
- **Digital Confirmation**: Confirm receipt through the app

### Failed Delivery Attempts

If delivery cannot be completed:

1. **First Attempt**: Service provider will contact you and wait (up to 15 minutes)
2. **Second Attempt**: Automatic rescheduling within 24 hours
3. **Third Attempt**: Contact customer service to arrange convenient time
4. **Storage Fees**: Items held beyond 7 days may incur storage fees

### Delivery Acceptance

By accepting delivery, you confirm:

- Receipt of all items listed in your order
- Items are in satisfactory condition
- Any issues are reported immediately through the app

## 5. Returns & Exchanges<a id="returns--exchanges"></a>

### Laundry Services Returns

#### Quality Guarantee

We stand behind the quality of our laundry services:

- **Re-wash Service**: Free re-wash if you're not satisfied with cleaning quality
- **Stain Removal**: Additional stain treatment at no extra charge
- **Pressing/Ironing**: Re-pressing for items not meeting standards

#### How to Request a Re-Service

1. Report the issue within 24 hours of delivery
2. Provide photos of the concern through the app
3. We'll arrange pickup for re-service
4. Re-serviced items returned within 24-48 hours

### Home Essentials Returns

#### Return Eligibility

You may return home essentials products if:

- Items are unused and in original packaging
- Return requested within 7 days of delivery
- Product is defective or damaged
- Wrong item was delivered

#### Non-Returnable Items

For health and safety reasons, the following cannot be returned:

- Perishable food items (unless defective)
- Personal care products (opened)
- Cleaning supplies (opened)
- Items marked as "Final Sale"

#### Return Process

1. **Initiate Return**: Request return through the app within 7 days
2. **Approval**: Our team reviews and approves eligible returns
3. **Pickup**: We arrange pickup of return items
4. **Inspection**: Items inspected upon receipt
5. **Refund/Exchange**: Processed within 5-7 business days

### Exchange Policy

- **Wrong Item**: Immediate exchange at no cost
- **Size/Preference**: Exchange subject to availability
- **Defective Products**: Immediate replacement or refund

## 6. Refund Policy<a id="refund-policy"></a>

### Refund Eligibility

Refunds are provided in the following circumstances:

#### Full Refunds

- Service not provided as ordered
- Significant quality issues that cannot be resolved
- Cancelled orders (within cancellation window)
- Duplicate charges or billing errors
- Damaged or defective products (home essentials)

#### Partial Refunds

- Minor quality issues affecting some items
- Partial order fulfillment
- Service delays beyond our control
- Promotional adjustments

### Refund Processing

#### Timeline

- **Wallet Refunds**: Instant credit to your Relax.ng wallet
- **Original Payment Method**: 5-7 business days
- **Bank Transfers**: 7-10 business days

#### Refund Methods

1. **Relax.ng Wallet**: Fastest option, available immediately for future bookings
2. **Original Payment Method**: Refunded to the card or account used for payment
3. **Bank Transfer**: For large amounts or upon request

### Refund Notifications

You'll receive notifications:

- When refund is initiated
- When refund is processed
- When refund is completed

### Disputed Charges

If you believe you've been incorrectly charged:

1. Contact customer service within 30 days
2. Provide order details and explanation
3. We'll investigate within 48 hours
4. Resolution provided within 5 business days

## 7. Damaged or Missing Items<a id="damaged-or-missing-items"></a>

### Reporting Damaged Items

#### Laundry Services

If your laundry items are damaged during service:

1. **Report Immediately**: Within 24 hours of delivery
2. **Provide Evidence**: Photos of damaged items
3. **Item Details**: Description and approximate value
4. **Investigation**: We'll investigate with the service provider
5. **Resolution**: Compensation or replacement within 7 days

#### Home Essentials

For damaged products:

1. **Inspect Upon Delivery**: Check items before accepting
2. **Document Damage**: Photos of damaged items and packaging
3. **Report Immediately**: Through the app or customer service
4. **Replacement**: Immediate replacement or refund

### Compensation for Damaged Items

#### Laundry Items

- **Standard Items**: Up to 10x the cleaning cost
- **Declared Value Items**: Up to declared value (maximum ₦50,000)
- **Luxury/Designer Items**: Recommend declaring value at booking

#### How to Declare Value

For high-value items:

1. Declare value when booking service
2. Provide proof of value (receipt, photos)
3. Additional insurance fee may apply
4. Enhanced care and tracking provided

### Missing Items

If items are missing from your order:

1. **Immediate Report**: Contact us within 24 hours
2. **Item Description**: Detailed description of missing items
3. **Investigation**: 48-hour investigation period
4. **Resolution**: 
   - Items found: Immediate delivery
   - Items not found: Compensation per policy

### Liability Limitations

While we take utmost care:

- We're not liable for items not listed on pickup receipt
- Pre-existing damage should be noted at pickup
- Maximum liability per item: ₦50,000 (unless declared value)
- Items left in pockets are not our responsibility

## 8. Cancellation Policy<a id="cancellation-policy"></a>

### Cancellation Windows

#### Free Cancellation

- **24+ hours before**: Full refund, no fees
- **Subscription Services**: Cancel anytime, effective next billing cycle

#### Late Cancellation

- **6-24 hours before**: 50% cancellation fee
- **Less than 6 hours**: 75% cancellation fee
- **No-show**: Full charge

### How to Cancel

1. **Through the App**: Go to "My Orders" and select "Cancel"
2. **Customer Service**: Call or message our support team
3. **Automatic Confirmation**: Receive cancellation confirmation

### Service-Specific Policies

#### Laundry Services

- Cancel before pickup: No charges
- Cancel after pickup: Items returned, service fee applies
- Express service: Cancellation fee applies if work started

#### Home Cleaning

- Cancel 24+ hours: Full refund
- Cancel same-day: 50% charge
- Recurring services: Cancel anytime, no future charges

#### Home Essentials

- Cancel before dispatch: Full refund
- Cancel after dispatch: Delivery fee applies
- Perishable items: No cancellation after preparation

### Subscription Cancellations

For subscription-based services:

- Cancel anytime through the app
- No cancellation fees
- Service continues until end of paid period
- No refunds for partial periods
- Can reactivate anytime

## 9. Special Circumstances<a id="special-circumstances"></a>

### Weather-Related Delays

In case of severe weather:

- We'll notify you of potential delays
- Automatic rescheduling available
- No fees for weather-related changes
- Safety is our priority

### Public Holidays

Service availability during holidays:

- **Major Holidays**: Limited service, advance booking required
- **Religious Holidays**: Respectful scheduling around prayer times
- **Holiday Surcharges**: May apply during peak periods
- **Advance Notice**: Holiday schedules posted in advance

### Emergency Situations

In case of emergencies (power outages, security situations):

- Immediate notification to affected customers
- Automatic rescheduling
- No penalties or fees
- Priority rescheduling when service resumes

### Special Requests

We accommodate special requests when possible:

- **Specific Service Providers**: Request preferred providers
- **Cultural Preferences**: Halal requirements, gender preferences
- **Access Instructions**: Detailed delivery/pickup instructions
- **Timing Flexibility**: Work with your schedule

### Corporate & Bulk Orders

Special terms for business customers:

- **Dedicated Account Manager**: For regular corporate clients
- **Custom Delivery Schedules**: Tailored to business needs
- **Volume Discounts**: Available for bulk orders
- **Invoice Billing**: Available for approved accounts
- **Priority Service**: Expedited handling for urgent needs

## 10. Contact Information<a id="contact-information"></a>

### Customer Service

We're here to help with any delivery or return questions:

**Email**: hello@relax.ng  
**Phone**: Available through the Relax.ng mobile app  
**Hours**: Monday - Saturday, 8:00 AM - 8:00 PM WAT  
**Emergency Support**: Available 24/7 through the app

### How to Reach Us

1. **In-App Chat**: Fastest response time (typically within 5 minutes)
2. **Email**: Response within 24 hours
3. **Phone**: Call through the app for immediate assistance
4. **Social Media**: Follow us for updates and announcements

### Feedback & Complaints

We value your feedback:

- **Service Feedback**: Rate every service through the app
- **Complaints**: Dedicated complaints handling team
- **Suggestions**: We're always improving based on your input
- **Response Time**: All complaints addressed within 48 hours

### Address

Relax.ng  
Northern Nigeria

For specific location details or to arrange special deliveries, please contact our customer service team.

---

## Policy Updates

This Delivery & Returns Policy may be updated from time to time to reflect changes in our services or legal requirements. We'll notify you of significant changes through:

- Email notification
- App notification
- Website announcement

**Effective Date**: This policy is effective as of January 24, 2026.

## Your Rights

You have the right to:

- Clear information about delivery times and procedures
- Fair treatment in returns and refunds
- Compensation for service failures
- Privacy and security of your information
- Escalate complaints if not resolved satisfactorily

## Our Commitment

At Relax.ng, we're committed to:

- Reliable and timely deliveries
- Transparent policies and procedures
- Fair and prompt resolution of issues
- Continuous improvement of our services
- Respect for your time and property

Thank you for choosing Relax.ng. We're dedicated to making your life easier with convenient, reliable service delivery across Northern Nigeria.

For any questions about this policy, please contact us at hello@relax.ng.
`;
