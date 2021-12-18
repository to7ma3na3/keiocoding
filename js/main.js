'use strict';

{
  // ハンバーガーメニュー
  const body = document.querySelector('body');
  const menu = document.getElementById('mobile-menu');
  const open = document.getElementById('menu-open');
  const close = document.getElementById('menu-close');
 

  open.addEventListener('click', () => {
    body.classList.add('show');
  });
  close.addEventListener('click', () => {
    body.classList.remove('show');
  });
  open.addEventListener('click', () => {
    menu.classList.add('show');
  });
  close.addEventListener('click', () => {
    menu.classList.remove('show');
  });


  // メインメニュー・故障中
  // const mitms = document.querySelectorAll('#main-menu .items .item');
  // const mctts = document.querySelectorAll('#main-menu .menu-content');

  // mitms.forEach(clickedMitm => {
  //   clickedMitm.addEventListener('click', e => {
  //     e.preventDefault();

  //     mitms.forEach(mitm => {
  //       mitm.classList.remove('show');
  //     });
  //     clickedMitm.classList.toggle('show');

  //     mctts.forEach(mctt => {
  //       mctt.classList.remove('show');
  //     });
  //     document.getElementById(clickedMitm.dataset.id).classList.add('show');
  //   });
  // });



  // メインメニューsp用OK

  const itm1sp = document.querySelector('#main-menu #rainyuin1-sp');
  const itm2sp = document.querySelector('#main-menu #keiougijuku-ni1-sp');
  const itm3sp = document.querySelector('#main-menu #iryoukankei1-sp');
  const ctt1sp = document.querySelector('#main-menu #rainyuin2-sp');
  const ctt2sp = document.querySelector('#main-menu #keiougijuku-ni2-sp');
  const ctt3sp = document.querySelector('#main-menu #iryoukankei2-sp');
  const dn1 = document.querySelector('.down1');
  const up1 = document.querySelector('.up1');
  const dn2 = document.querySelector('.down2');
  const up2 = document.querySelector('.up2');
  const dn3 = document.querySelector('.down3');
  const up3 = document.querySelector('.up3');
  const batsu1 = document.querySelector('#rainyuin2-sp .kadan .batsu1');
  const batsu2 = document.querySelector('#keiougijuku-ni2-sp .kadan .batsu2');
  const batsu3 = document.querySelector('#iryoukankei2-sp .kadan .batsu3');
 
  itm1sp.addEventListener('click',() => {
    itm1sp.classList.toggle('on');
    ctt1sp.classList.toggle('show');
    dn1.classList.toggle('on');
    up1.classList.toggle('on');
  });
  itm2sp.addEventListener('click', () => {
    itm2sp.classList.toggle('on');
    ctt2sp.classList.toggle('show');
    dn2.classList.toggle('on');
    up2.classList.toggle('on');
  });
  itm3sp.addEventListener('click', () => {
    itm3sp.classList.toggle('on');
    ctt3sp.classList.toggle('show');
    dn3.classList.toggle('on');
    up3.classList.toggle('on');
  });

  batsu1.addEventListener('click', () => {
    itm1sp.classList.toggle('on');
    ctt1sp.classList.toggle('show');
  });
  batsu2.addEventListener('click', () => {
    itm2sp.classList.toggle('on');
    ctt2sp.classList.toggle('show');
  });
  batsu3.addEventListener('click', () => {
    itm3sp.classList.toggle('on');
    ctt3sp.classList.toggle('show');
  });



  //メインメニュー㍶用
  const itm1pc = document.querySelector('#rainyuin1');
  const itm2pc = document.querySelector('#keiougijuku-ni1');
  const itm3pc = document.querySelector('#iryoukankei1');
  const ctt1pc = document.querySelector('#rainyuin2');
  const ctt2pc = document.querySelector('#keiougijuku-ni2');
  const ctt3pc = document.querySelector('#iryoukankei2');
  const pc1 = document.querySelector('#pc1');
  const pc2 = document.querySelector('#pc2');
  const pc3 = document.querySelector('#pc3');

  const batsu1pc = document.querySelector('#rainyuin2 .kadan .batsu1pc');
  const batsu2pc = document.querySelector('#keiougijuku-ni2 .kadan .batsu2pc');
  const batsu3pc = document.querySelector('#iryoukankei2 .kadan .batsu3pc');
  
  pc1.addEventListener('mouseover',() => {
    itm1pc.classList.add('on');
    ctt1pc.classList.add('show');
  });
  pc1.addEventListener('mouseout',() => {
    itm1pc.classList.remove('on');
    ctt1pc.classList.remove('show');
  });

  pc2.addEventListener('mouseover', () => {
    itm2pc.classList.add('on');
    ctt2pc.classList.add('show');
  });
  pc2.addEventListener('mouseout', () => {
    itm2pc.classList.remove('on');
    ctt2pc.classList.remove('show');
  });

  pc3.addEventListener('mouseover', () => {
    itm3pc.classList.add('on');
    ctt3pc.classList.add('show');
  });
  pc3.addEventListener('mouseout', () => {
    itm3pc.classList.remove('on');
    ctt3pc.classList.remove('show');
  });

  batsu1pc.addEventListener('click', () => {
    itm1pc.classList.toggle('on');
    ctt1pc.classList.toggle('show');
  });
  batsu2pc.addEventListener('click', () => {
    itm2pc.classList.toggle('on');
    ctt2pc.classList.toggle('show');
  });
  batsu3pc.addEventListener('click', () => {
    itm3pc.classList.toggle('on');
    ctt3pc.classList.toggle('show');
  });
 


  // busi-info
  // モバイル用OK
  const cur1 = document.querySelector('.cur1');
  const con1 = document.querySelector('.con1');
  cur1.addEventListener('click', () => {
    con1.classList.toggle('appear');
  });

  const cur2 = document.querySelector('.cur2');
  const con2 = document.querySelector('.con2');
  cur2.addEventListener('click', () => {
    con2.classList.toggle('appear');
  });

  const cur3 = document.querySelector('.cur3');
  const con3 = document.querySelector('.con3');
  cur3.addEventListener('click', () => {
    con3.classList.toggle('appear');
  });


}
  

// 丸に矢印
{
  function draw() {
    const canvas = document.querySelector('.a1');
    if (typeof canvas.getContext === 'undefined') {
      return;
    }
    const ctx = canvas.getContext('2d');

    ctx.beginPath();
    ctx.moveTo(15, 10);
    ctx.lineTo(7, 12);
    ctx.lineTo(7, 8);
    ctx.lineTo(15, 10);
    ctx.fillStyle= '#fff';
    ctx.fill();

    ctx.beginPath();
    ctx.arc(10, 10, 8, 0, 2 * Math.PI);
    ctx.strokeStyle= '#fff';
    ctx.stroke();
  }

  draw();
}

{

  function draw() {
    const canvas = document.querySelector('.a2');
    if (typeof canvas.getContext === 'undefined') {
        return;
    }
    const ctx = canvas.getContext('2d');

    ctx.beginPath();
    ctx.moveTo(15, 10);
    ctx.lineTo(7, 12);
    ctx.lineTo(7, 8);
    ctx.lineTo(15, 10);
    ctx.fillStyle= '#fff';
    ctx.fill();

    ctx.beginPath();
    ctx.arc(10, 10, 8, 0, 2 * Math.PI);
    ctx.strokeStyle= '#fff';
    ctx.stroke();
  }

  draw();
  
}

{
  
  function draw() {
    const canvas = document.querySelector('.a3');
    if (typeof canvas.getContext === 'undefined') {
      return;
    }
    const ctx = canvas.getContext('2d');

    ctx.beginPath();
    ctx.moveTo(15, 10);
    ctx.lineTo(7, 12);
    ctx.lineTo(7, 8);
    ctx.lineTo(15, 10);
    ctx.fillStyle= '#fff';
    ctx.fill();

    ctx.beginPath();
    ctx.arc(10, 10, 8, 0, 2 * Math.PI);
    ctx.strokeStyle= '#fff';
    ctx.stroke();
  }

  draw();

}

{
  
  function draw() {
    const canvas = document.querySelector('.a4');
    if (typeof canvas.getContext === 'undefined') {
      return;
    }
    const ctx = canvas.getContext('2d');

    ctx.beginPath();
    ctx.moveTo(15, 10);
    ctx.lineTo(7, 12);
    ctx.lineTo(7, 8);
    ctx.lineTo(15, 10);
    ctx.fillStyle= '#fff';
    ctx.fill();

    ctx.beginPath();
    ctx.arc(10, 10, 8, 0, 2 * Math.PI);
    ctx.strokeStyle= '#fff';
    ctx.stroke();
  }

  draw();

}
  
{
  function draw() {
    const canvas = document.querySelector('.a5');
    if (typeof canvas.getContext === 'undefined') {
      return;
    }
    const ctx = canvas.getContext('2d');

    ctx.beginPath();
    ctx.moveTo(15, 10);
    ctx.lineTo(7, 12);
    ctx.lineTo(7, 8);
    ctx.lineTo(15, 10);
    ctx.fillStyle= '#fff';
    ctx.fill();

    ctx.beginPath();
    ctx.arc(10, 10, 8, 0, 2 * Math.PI);
    ctx.strokeStyle= '#fff';
    ctx.stroke();
  }

  draw();
}
  
// {
//   function draw() {
//     const canvas = document.querySelector('.b1');
//     if (typeof canvas.getContext === 'undefined') {
//       return;
//     }
//     const ctx = canvas.getContext('2d');

//     ctx.beginPath();
//     ctx.moveTo(15, 10);
//     ctx.lineTo(7, 12);
//     ctx.lineTo(7, 8);
//     ctx.lineTo(15, 10);
//     ctx.fillStyle= '#fff';
//     ctx.fill();

//     ctx.beginPath();
//     ctx.arc(10, 10, 8, 0, 2 * Math.PI);
//     ctx.strokeStyle= '#fff';
//     ctx.stroke();
//   }

//   draw();
// }

// {
//   function draw() {
//     const canvas = document.querySelector('.b2');
//     if (typeof canvas.getContext === 'undefined') {
//       return;
//     }
//     const ctx = canvas.getContext('2d');

//     ctx.beginPath();
//     ctx.moveTo(15, 10);
//     ctx.lineTo(7, 12);
//     ctx.lineTo(7, 8);
//     ctx.lineTo(15, 10);
//     ctx.fillStyle= '#fff';
//     ctx.fill();

//     ctx.beginPath();
//     ctx.arc(10, 10, 8, 0, 2 * Math.PI);
//     ctx.strokeStyle= '#fff';
//     ctx.stroke();
//   }

//   draw();
// }


 // 大切なお知らせ・タブメニュー
{
  const pcs = document.querySelectorAll('.sec4-2 .tabBar .tab .pc');
  const contents = document.querySelectorAll('.sec4-2 .tabBar .tab .content');

  pcs.forEach(clickedPc => {
    clickedPc.addEventListener('click', e => {
      e.preventDefault();

      pcs.forEach(pc => {
        pc.classList.remove('on');
      });
      clickedPc.classList.add('on');

      contents.forEach(con => {
        con.classList.remove('on');
      });
      document.getElementById(clickedPc.dataset.id).classList.add('on');
    });
  });

}

