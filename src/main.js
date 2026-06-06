import './style.css'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// GSAPプラグインの登録
gsap.registerPlugin(ScrollTrigger)

document.addEventListener('DOMContentLoaded', () => {
  initAnimations()
})

function initAnimations() {
  // 1. ヒーローセクションのアニメーション
  // 読み込み時にヒーローテキストと画像をフワッとフェードイン
  gsap.from('.hero-title', {
    y: 30,
    opacity: 0,
    duration: 1.2,
    ease: 'power4.out',
    delay: 0.2
  })

  gsap.from('.hero-subtitle', {
    y: 20,
    opacity: 0,
    duration: 1.2,
    ease: 'power4.out',
    delay: 0.4
  })

  gsap.from('.hero-image-wrap', {
    scale: 1.1,
    opacity: 0,
    duration: 1.6,
    ease: 'power4.out',
    delay: 0.6
  })

  // スクロール時にヒーロー画像が縮小しつつなめらかにパララックスする効果
  gsap.to('.hero-image', {
    scale: 1.15,
    y: '8%',
    scrollTrigger: {
      trigger: '#hero',
      start: 'top top',
      end: 'bottom top',
      scrub: true
    }
  })

  // 2. コンセプトテキストのフォーカスフェードイン
  const conceptSpans = document.querySelectorAll('.concept-heading span')
  conceptSpans.forEach((span) => {
    gsap.from(span, {
      filter: 'blur(10px)',
      opacity: 0,
      y: 20,
      duration: 1.2,
      scrollTrigger: {
        trigger: span,
        start: 'top 85%',
        end: 'top 65%',
        scrub: true
      }
    })
  })

  gsap.from('.concept-lead', {
    opacity: 0,
    y: 20,
    duration: 1.2,
    scrollTrigger: {
      trigger: '.concept-lead',
      start: 'top 80%',
      end: 'top 60%',
      scrub: true
    }
  })

  // 3. なぜ足裏か (対比カードのスライドフェードイン)
  gsap.from('.card-alert', {
    x: -50,
    opacity: 0,
    duration: 1.2,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: '.why-grid',
      start: 'top 80%'
    }
  })

  gsap.from('.card-success', {
    x: 50,
    opacity: 0,
    duration: 1.2,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: '.why-grid',
      start: 'top 80%'
    }
  })

  // 4. 料金プランカードのフワッとした登場
  const priceCards = document.querySelectorAll('.price-card')
  priceCards.forEach((card, index) => {
    gsap.from(card, {
      y: 40,
      opacity: 0,
      duration: 1.2,
      ease: 'power3.out',
      delay: index * 0.2,
      scrollTrigger: {
        trigger: '.pricing-grid',
        start: 'top 80%'
      }
    })
  })

  // 5. プロフィールセクションの登場
  gsap.from('.profile-img-wrap', {
    x: -30,
    opacity: 0,
    duration: 1.5,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: '.profile-grid',
      start: 'top 75%'
    }
  })

  gsap.from('.profile-text-wrap', {
    x: 30,
    opacity: 0,
    duration: 1.5,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: '.profile-grid',
      start: 'top 75%'
    }
  })

  // 6. 予約ステップの登場
  const stepItems = document.querySelectorAll('.step-item')
  stepItems.forEach((item, index) => {
    gsap.from(item, {
      y: 30,
      opacity: 0,
      duration: 1.0,
      ease: 'power3.out',
      delay: index * 0.15,
      scrollTrigger: {
        trigger: '.steps-grid',
        start: 'top 80%'
      }
    })
  })
}
