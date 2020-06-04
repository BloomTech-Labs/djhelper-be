exports.seed = function(knex) {
  return (
    knex('locations')
      // .truncate()
      .then(function() {
        // Inserts seed entries
        return knex('locations').insert([
          {
            address_line_1: '35 E 400 N',
            address_line_2: '',
            city: 'Lindon',
            state: 'UT',
            zip: '84042',
            name: 'Wadley Farms',
            phone: '801-404-9996',
            email: 'wadleyfarms@gmail.com',
            website: 'http://www.wadleyfarms.com/',
            img_url:
              'https://images.squarespace-cdn.com/content/v1/5c6c7155f4755a6a9a21e221/1550702772662-9XB6C8MAK7KCBNQA6G0T/ke17ZwdGBToddI8pDm48kLkXF2pIyv_F2eUT9F60jBl7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0iyqMbMesKd95J-X4EagrgU9L3Sa3U8cogeb0tjXbfawd0urKshkc5MgdBeJmALQKw/wadleyfarmsspring18-485.jpg?format=1500w'
          },
          {
            address_line_1: '28999 Joy Rd',
            address_line_2: '',
            city: 'Westland',
            state: 'MI',
            zip: '48185',
            name: 'Joy Manor - Banquet & Event Center',
            phone: '734-525-0960',
            website: 'http://www.joymanor.com/'
          },
          {
            address_line_1: '411 E Historic Columbia River Hwy',
            address_line_2: '',
            city: 'Troutdale',
            state: 'OR',
            zip: '97060',
            name: 'The Troutdale House by the Sandy River',
            website: 'https://www.thetroutdalehouse.com/',
            email: 'thetroutdalehouse@gmail.com',
            img_url:
              'https://lh3.googleusercontent.com/kgvh2eZh-7qOOHOxM7wzr8Pf5ocbGKhbICqxUmPfGHQNJMX4JX88y1p7wU074-2W2RzRuYQFYrcOfq6WQhSYBp_3T77FjrJH5O5fW66J-T2QXIwl0e-sAL73mvVdjE-f4t-TlefyLgE=w1920-h1080'
          },
          {
            address_line_1: '2701 Corporate Cir',
            address_line_2: '',
            city: 'Flower Mound',
            state: 'TX',
            zip: '75028',
            name: 'Aristide | Flower Mound',
            website: 'http://www.aristideevents.com/',
            phone: '972-539-6464',
            email: 'FlowerMound@AristideEvents.com',
            img_url:
              'https://static.spacecrafted.com/cb448e8eb7a044e0bb9b2a3ce59e3125/i/e4ad1564122340d5bf515800cb533fcd/1/GCuCv727RiYFXYTGZA3v2p/Larson%20Wedding%20-%20Kate%20Panza%20Photography.jpg'
          },
          {
            address_line_1: '7452, 93884 Coos-Sumner Ln',
            address_line_2: '',
            city: 'Coos Bay',
            state: 'OR',
            zip: '97420',
            name: 'The Clubhouse at Coos Golf Club',
            website: 'http://watsonranchgolfcourse.com/',
            email: 'andre.liloc@coosgolfclub.com',
            img_url:
              'https://scontent-lax3-1.xx.fbcdn.net/v/t1.0-9/27657164_2044099442283808_3390081473468907336_n.jpg?_nc_cat=109&_nc_sid=dd9801&_nc_oc=AQmSM2xKxJKXXlZGfusBqReChG68W1-ZwnTtS7MfJ9EtaeVTQ9TnDwkRFGFb0itYhu8&_nc_ht=scontent-lax3-1.xx&oh=48962a06a3d1d38f66df7019e54c370f&oe=5E93B8C1'
          },
          {
            address_line_1: '185 W 200 N',
            address_line_2: '',
            city: 'Lindon',
            state: 'UT',
            zip: '84042',
            name: 'Veterans Hall',
            website: 'https://www.lindonrecreation.org/reservations',
            email: 'hbateman@lindoncity.org',
            img_url:
              'https://static.wixstatic.com/media/744ba5_20b3f836c1ff4157a4a442aa4f0868e6~mv2_d_4032_3024_s_4_2.jpg/v1/fill/w_376,h_271,al_c,q_80,usm_0.66_1.00_0.01/744ba5_20b3f836c1ff4157a4a442aa4f0868e6~mv2_d_4032_3024_s_4_2.webp'
          },
          {
            address_line_1: '110 South Main Street',
            address_line_2: '',
            city: 'Lindon',
            state: 'UT',
            zip: '84042',
            name: 'Castle Park Wedding & Events',
            website: 'http://castleparkevents.com/',
            email: 'info@castleparkevents.com',
            img_url:
              'https://castleparkevents.com/wp-content/uploads/2017/01/Castle-at-Sunset-440x325.gif'
          },
          {
            address_line_1: '275 W 200 N #300',
            address_line_2: '',
            city: 'Lindon',
            state: 'UT',
            zip: '84042',
            name: 'Bella Vista Reception Center',
            website: 'http://bellavistautah.com/',
            email: '',
            img_url:
              'https://bellavistautah.com/wp-content/uploads/2018/09/Gallery_021-1024x684.jpg'
          },
          {
            address_line_1: '26 S. 500 E.',
            address_line_2: '',
            city: 'Lindon',
            state: 'UT',
            zip: '84042',
            name: 'Walker Farms Weddings & Events',
            website: 'https://walkerfarms.com/',
            email: '',
            img_url:
              'https://i0.wp.com/walkerfarms.com/wp-content/uploads/2020/01/XI7A2383-scaled.jpg?ssl=1'
          },
          {
            address_line_1: '886 W 2600 N',
            address_line_2: '',
            city: 'Pleasant Grove',
            state: 'UT',
            zip: '84062',
            name: 'Stone Gate Weddings & Events',
            website: 'http://stonegateweddings.com/',
            email: '',
            phone: '801-995-9996',
            img_url:
              'https://i0.wp.com/stonegateweddings.com/wp-content/uploads/2019/11/Tall-Vase-Ballroom.jpg?strip=info&w=710&ssl=1'
          },
          {
            address_line_1: '2131 N 180 W St',
            address_line_2: '',
            city: 'Pleasant Grove',
            state: 'UT',
            zip: '84062',
            name: 'Barbwire and Lace',
            website: 'http://www.barbwireandlace.com/',
            email: 'barbwire46@hotmail.com',
            phone: '801-871-5223',
            img_url:
              'http://www.barbwireandlace.com/wp-content/gallery/property/001.jpg'
          },
          {
            address_line_1: '535 N State St',
            address_line_2: '',
            city: 'Lindon',
            state: 'UT',
            zip: '84042',
            name: 'Big Willow Barn Event Center',
            website: 'https://www.bigwillowbarn.com/',
            email: 'events@BigWillowBarn.com',
            phone: '801-787-6739',
            img_url:
              'https://static.wixstatic.com/media/876f1d_69f9c51b44dc401ebb5ffea77322509a~mv2.png/v1/fill/w_600,h_344,al_c,q_85,usm_0.66_1.00_0.01/Big_Willow_Barn_Logo.webp'
          },
          {
            address_line_1: '1151 Wilkinson Student Center',
            address_line_2: '',
            city: 'Provo',
            state: 'UT',
            zip: '84602',
            name: 'The Wall',
            website: 'http://thewallbyu.com/',
            email: 'thewallbyu@gmail.com',
            phone: '801-422-4470',
            img_url:
              'https://scontent-lax3-1.xx.fbcdn.net/v/t1.0-9/56823325_2175156785910371_8380934791817592832_o.jpg?_nc_cat=102&_nc_sid=6e5ad9&_nc_oc=AQm4eifZXCB-VfBlBTs5dV1kHiko1_goEqDdr-G7JliwGG1bSE9kddZmmp9BVsSfN-o&_nc_ht=scontent-lax3-1.xx&oh=8aac9ad6b7623aef18d0230d0580cf44&oe=5E9558D9'
          },
          {
            address_line_1: '527 2nd Ave',
            address_line_2: '',
            city: 'Soap Lake',
            state: 'WA',
            zip: '98851',
            name: 'Soap Lake High School',
            website: 'http://www.slschools.org/',
            email: '',
            phone: '509-246-1201',
            img_url:
              'https://3.files.edl.io/af7c/19/04/11/233742-d9d6a93f-45bc-4841-88f3-5af93823f06a.jpg'
          },
          {
            address_line_1: '93 400 E',
            address_line_2: '',
            city: 'Orem',
            state: 'UT',
            zip: '84097',
            name: 'Orem Senior Friendship Center',
            website: 'https://www.oremrecreation.com/seniorcenter/',
            email: '',
            phone: '801-229-7111',
            img_url:
              'https://www.oremrecreation.com/wp-content/uploads/seniorcenterpage-orem.jpg'
          },
          {
            address_line_1: '4441 Collins Ave',
            address_line_2: '',
            city: 'Miami Beach',
            state: 'FL',
            zip: '33140',
            name: 'Club Liv',
            phone: '305 674 4680',
            website: 'https://www.livnightclub.com',
            email: 'REFUNDS@LIVNIGHTCLUB.COM',
            img_url:
              'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic1.squarespace.com%2Fstatic%2F599decabf5e231e0deddae69%2F59cc1818f43b5598696280b6%2F5a00bd7753450a19bb603e41%2F1509997965638%2FIMG_8977.jpg&f=1&nofb=1'
          },
          {
            address_line_1: 'Dubai Marina',
            address_line_2:
              'Skydive Dubai Drop Zone - King Salman Bin Abdulaziz Al Saud St',
            city: 'Dubai',
            state: 'United Arab Emirates',
            zip: '00000',
            name: 'Zero Gravity',
            phone: '+971 4 399 0009',
            website: 'https://www.0-gravity.ae/',
            email: 'info@0-gravity.ae',
            img_url:
              'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.timeoutdubai.com%2Fsites%2Fdefault%2Ffiles%2Ftod%2Fstyles%2Ffull_img%2Fpublic%2Fimages%2F2018%2F10%2F04%2Fzero_gravity_2.jpg%3Fitok%3D-UvqZPK-&f=1&nofb=1'
          },
          {
            address_line_1: "Ulitsa Bol'shaya Dmitrovka",
            address_line_2: '32',
            city: 'Moscow',
            state: 'Russia',
            zip: '00000',
            name: 'Einstein Lounge',
            phone: '+7 968 459-22-10',
            website: 'https://www.facebook.com/bar.KotShredingera',
            email: 'N/A',
            img_url:
              'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia-cdn.tripadvisor.com%2Fmedia%2Fphoto-s%2F0d%2F04%2F0b%2Fb8%2Fcaption.jpg&f=1&nofb=1'
          }
        ]);
      })
  );
};
