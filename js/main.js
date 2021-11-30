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



  // メインメニュー個別動作OK

  const itm1 = document.getElementById('rainyuin1');
  const itm2 = document.getElementById('keiougijuku-ni1');
  const itm3 = document.getElementById('iryoukankei1');
  const ctt1 = document.getElementById('rainyuin2');
  const ctt2 = document.getElementById('keiougijuku-ni2');
  const ctt3 = document.getElementById('iryoukankei2');
  const dn1 = document.querySelector('.down1');
  const up1 = document.querySelector('.up1');
  const dn2 = document.querySelector('.down2');
  const up2 = document.querySelector('.up2');
  const dn3 = document.querySelector('.down3');
  const up3 = document.querySelector('.up3');
 
  itm1.addEventListener('click', () => {
    ctt1.classList.toggle('show');
    dn1.classList.toggle('on');
    up1.classList.toggle('on');
  });
  itm2.addEventListener('click', () => {
    ctt2.classList.toggle('show');
    dn2.classList.toggle('on');
    up2.classList.toggle('on');
  });
  itm3.addEventListener('click', () => {
    ctt3.classList.toggle('show');
    dn3.classList.toggle('on');
    up3.classList.toggle('on');
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
  const currents = document.querySelectorAll('.tabBar .tab .current');
  const contents = document.querySelectorAll('.tabBar .tab .content');

  currents.forEach(clickedCur => {
    clickedCur.addEventListener('click', e => {
      e.preventDefault();

      currents.forEach(cur => {
        cur.classList.remove('on');
      });
      clickedCur.classList.add('on');

      contents.forEach(con => {
        con.classList.remove('on');
      });
      document.getElementById(clickedCur.dataset.id).classList.add('on');
    });
  });

}

