---
'$title': الربح من صفحة AMP الخاصة بك مع الإعلانات
$order: 0
description: يقدم هذا الدليل إرشادات وأفضل الممارسات لعرض الإعلانات على صفحات AMP الخاصة بك. لذا، من أجل عرض الإعلانات في AMP، يلزمك إضافة مكون amp-ad المخصص ...
formats:
  - websites
---

يقدم هذا الدليل إرشادات وأفضل الممارسات لعرض الإعلانات على صفحات AMP الخاصة بك.

## إضافة الإعلانات إلى صفحتك

في الصفحات المبنية بلغة برمجة غير AMP (HTML تقليدية) إذا كنت ترغب في عرض الإعلانات على صفحتك، فسيتعين عليك تضمين مقتطف من JavaScript لعرض الإعلانات من شبكة الإعلانات لديك. ولأسباب تتعلق بالأداء والأمان، لا يمكنك تضمين JavaScript لجهة خارجية في صفحات AMP. لذا، من أجل عرض الإعلانات في AMP، عليك إضافة المكون [`amp-ad`](../../../../documentation/components/reference/amp-ad.md) المخصص إلى صفحة AMP الخاصة بك.

[tip type="tip"] **تلميح–** راجع [أمثلة استخدام AMP للحصول على عرض توضيحي مباشر](../../../../documentation/components/reference/amp-ad.md) يشرح طريقة إضافة العلامة amp-ad لصفحة AMP. [/tip]

لنبدأ خطوات إضافة المكون حتى تتمكن من عرض الإعلانات على صفحة AMP لديك.

### الخطوة 1: إضافة البرنامج النصي amp-ad

يُعد المكون [`amp-ad`](../../../../documentation/components/reference/amp-ad.md) إضافة إعلان مخصصة لمكتبة AMP. ويوجد تحت غطاء [`amp-ad`](../../../../documentation/components/reference/amp-ad.md) JavaScript مخصص تم تصميمه بعناية لتحسين الأداء. لتشغيل المكون [`amp-ad`](../../../../documentation/components/reference/amp-ad.md)، عليك إضافة JavaScript المطلوبة لهذا المكوِّن في قسم `head` بصفحة AMP لديك:

```html
<script
  async
  custom-element="amp-ad"
  src="https://ampjs.org/v0/amp-ad-0.1.js"
></script>
```

### الخطوة 2: إضافة علامة amp-ad إلى صفحة AMP لديك

يوفر +100 [خادم وشبكة إعلانات](ads_vendors.md) تكاملات مدمجة مع AMP. لإضافة إعلان لشبكة إعلانات معينة، أضف العلامة [`amp-ad`](../../../../documentation/components/reference/amp-ad.md)، وحدد الشبكة في السمة `type`.

نضيف في هذا المثال شريحة إعلانية لعرض الإعلانات من شبكة a9:

```html
<amp-ad type="a9"> </amp-ad>
```

### الخطوة 3: تحديد حجم وحدة الإعلان

أضف سمتي `width` و`height` إلى العلامة [`amp-ad`](../../../../documentation/components/reference/amp-ad.md). إذ يحدد هذا الأمر حجم الإعلان على صفحة AMP لديك:

```html
<amp-ad type="a9"> width="300" height="250" </amp-ad>
```

### الخطوة 4: تعيين معلمات شبكة الإعلانات

تحتوي كل شبكة على سمات بيانات محددة مطلوبة لعرض الإعلانات. راجع وثائق [`amp-ad`](../../../../documentation/components/reference/amp-ad.md) لشبكة الإعلانات، وأضف السمات المطلوبة في المثال التالي، حيث تتطلب شبكة a9 معلمات إضافية لتحديد حجم الإعلان وتفاصيل أخرى:

```html
<amp-ad
  type="a9"
  width="300"
  height="250"
  data-aax_size="300x250"
  data-aax_pubname="test123"
  data-aax_src="302"
>
</amp-ad>
```

### الخطوة 5: (اختياري) حدد عنصرًا نائبًا

اعتمادًا على شبكة الإعلانات، يمكنك اختيار عرض عنصر نائب حتى يصبح الإعلان متوفرًا للعرض. إذ يوفر هذا الأمر تجربة مستخدم أفضل من خلال تفادي المسافات الفارغة. لتحديد عنصر نائب، أضف عنصرًا تابعًا بالسمة `placeholder`. تعرف على المزيد في [العناصر النائبة والاحتياطية](../../../../documentation/guides-and-tutorials/develop/style_and_layout/placeholders.md).

```html
<amp-ad
  type="a9"
  width="300"
  height="250"
  data-aax_size="300x250"
  data-aax_pubname="test123"
  data-aax_src="302"
>
  <amp-img placeholder src="placeholder-image.jpg"></amp-img>
</amp-ad>
```

### الخطوة 6: (اختياري) حدد عنصرًا احتياطيًا

اعتمادًا على شبكة الإعلانات، يمكنك اختيار عرض عنصر احتياطي إذا لم يكن هناك إعلانات متوفرة للعرض. لتحديد عنصر احتياطي، أضف عنصرًا تابعًا بالسمة `fallback`. تعرف على المزيد في [العناصر النائبة والاحتياطية](../../../../documentation/guides-and-tutorials/develop/style_and_layout/placeholders.md).

```html
<amp-ad
  type="a9"
  width="300"
  height="250"
  data-aax_size="300x250"
  data-aax_pubname="test123"
  data-aax_src="302"
>
  <amp-img fallback src="fallback-image.jpg"></amp-img>
</amp-ad>
```

تهانينا! أنت الآن تعرض الإعلانات على صفحة AMP الخاصة بك!

## عرض إعلانات AMPHTML للبيع المباشر

يعرض المكون [`amp-ad`](../../../../documentation/components/reference/amp-ad.md) الإعلانات من الشبكة التي تحددها. ويمكن أن تكون هذه الإعلانات عبارة عن إعلانات HTML قياسية أو إعلانات AMPHTML، بشرط أن تدعم شبكة الإعلانات إعلانات AMPHTML. لعرض إعلانات بيع مباشر على أنها إعلانات AMPHTML، قم بإنشاء إعلان في AMP HTML وفقًا لمتطلبات [مواصفات إعلانات AMPHTML](../../../../documentation/guides-and-tutorials/learn/a4a_spec.md) واستخدم [خادم إعلانات يعرض إعلانات AMPHTML](https://github.com/ampproject/amphtml/blob/main/ads/google/a4a/docs/a4a-readme.md#publishers).

## زيادة بيانات الاستهداف في طلبات الإعلان

تسمح ميزة التكوين في التوقيت الحقيقي، كجزء من آلية عرض الإحضار السريع، للناشرين بزيادة طلبات الإعلان بمعلومات استهداف الطرف الأول والطرف الثالث التي يتم استردادها في وقت التشغيل. كما يسمح التكوين في التوقيت الحقيقي بما يصل إلى 5 استدعاءات لخوادم الاستهداف لكل شريحة إعلانية فردية، ويتم إلحاق نتائجها بطلب الإعلان. لاستخدام التكوين في التوقيت الحقيقي في إعلاناتك، يجب أن تدعم شبكة الإعلانات التي تستخدمها التكوين في التوقيت الحقيقي والإحضار السريع.

يمكنك التعرف على المزيد حول التكوين في التوقيت الحقيقي من مقطع الفيديو عبر Youtube التالي:

[video src='https://www.youtube.com/watch?v=mvAmvKiWPfA' caption='شاهد الربح الفعال في AMP باستخدام مزايدات رأس الصفحة.']

أو تعرف على المزيد من موارد التكوين في التوقيت الحقيقي:

- [دليل تنفيذ الناشر للتكوين في التوقيت الحقيقي في AMP](https://github.com/ampproject/amphtml/blob/main/extensions/amp-a4a/rtc-publisher-implementation-guide.md)
- [التكوين في التوقيت الحقيقي في AMP](https://github.com/ampproject/amphtml/blob/main/extensions/amp-a4a/rtc-documentation.md)

## أفضل الممارسات

فيما يلي بعض النصائح لزيادة فعالية الإعلانات على صفحات AMP لديك:

### الموضع وعناصر التحكم: تحسين مواضع إعلانك

- ضع عدد الإعلانات نفسه في صفحات AMP مثل صفحاتك المبنية بغير AMP لتحقيق أقصى عائد لكل صفحة.
- **ضع الإعلان الأول أسفل منفذ العرض الأول مباشرة** ("أسفل الطية") لتوفير تجربة مستخدم فائقة.
- ما لم تكن تستخدم CSS أو استعلامات وسائط متقدمة **تأكد من أن وحداتك الإعلانية متمركزة في الصفحة** لتزويد المستخدمين بتجربة ويب مثالية للهاتف المحمول.
- <a class="" href="https://github.com/ampproject/amphtml/blob/main/ads/README.md#support-for-multi-size-ad-requests">قم بتمكين طلبات الإعلانات متعددة الأحجام في مخزون </a> AMP لزيادة لضغط على مزاد الإعلانات وزيادة الأرباح.

### الطلب والتسعير: احصل على السعر المناسب لإعلاناتك

- **قم ببيع الوحدات الإعلانية على صفحات AMP لديك عبر كل قنوات المبيعات**، بما في ذلك المباشرة وغير المباشرة لزيادة المنافسة على مخزونك على صفحات AMP.
- **حدد سعر مخزون إعلاناتك على صفحات AMP** المشابهة لمخزونك على صفحات بغير AMP. وراقب الأداء وعدِّل الأسعار وفقًا لذلك.
- **تأكد من أن جميع قنوات طلب الإعلانات تتنافس** على مخزون الإعلانات على صفحات AMP لديك لزيادة المنافسة.

### أنواع الإعلانات: عرض أفضل أنواع الإعلانات

- **تجنب الإبداع الزائد** وفقًا [للدليل الإرشادي لمكتب الإعلان التفاعلي](http://www.iab.com/wp-content/uploads/2015/11/IAB_Display_Mobile_Creative_Guidelines_HTML5_2015.pdf).
- **الإعلانات البينية** أو تنسيقات الإعلانات الأخرى التي من شأنها التسبب في إعادة تدفق المحتوى عند تحميل الإعلان.
- **حسِّن من إمكانية العرض** من خلال إعداد استراتيجية تحميل بيانات لتفضيل إمكانية العرض على طرق العرض.
- **ضع الإعلانات في محتوى الفيديو لديك** عبر [المشغلات المدعومة](../../../../documentation/components/index.html#media) أو [`amp-iframe`](../../../../documentation/components/reference/amp-iframe.md) لتمكين الإيرادات على كل أنواع المحتوى.
- **قم بتنفيذ الإعلانات الأصلية** للتنافس مع الإعلانات المعروضة باستخدام طلبات الإعلانات متعددة الأحجام، مما يزيد من ضغط الطلب أثناء توفير تجربة مستخدم فائقة لقرائك.

### الابتكار: تقديم المنتجات الإعلانية الأكثر جاذبية

- **قم بتنفيذ الإعلانات على صفحات AMP الملحقة** لتحقيق إيرادات إضافية:
  - [الإعلانات في المكتبة](../../../../documentation/examples/documentation/Carousel_Ad.html)
  - [الإعلانات في العرض المبسط](../../../../documentation/examples/documentation/Lightbox_Ad.html)
  - ... و[المزيد](../../../../documentation/examples/index.html)
- **قم بتنفيذ تنسيقات جديدة لإعلانات البيع المباشر** لتزويد فريق المبيعات بمنتجات إعلانية مبتكرة وعالية التأثير:
  - [إعلانات مثبتة](../../../../documentation/examples/documentation/amp-sticky-ad.html)
  - [السجاد الطائر](../../../../documentation/examples/documentation/amp-fx-flying-carpet.html)

## موارد إضافية

- [قوالب إعلانات AMPHTML](../../../../documentation/examples/index.html)
- [عرض توضيحي: شرح طريقة إضافة `amp-ad` إلى صفحة AMP لديك](../../../../documentation/components/reference/amp-ad.md)
