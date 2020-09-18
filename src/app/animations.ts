import {
  trigger,
  transition,
  style,
  query,
  group,
  animateChild,
  state,
  animate,
  keyframes,
} from '@angular/animations';

export let fade = trigger('fadeIn',[
    state('void', style({opacity:0})),

    transition(':enter, :leave', [ //void <=> *
      animate(500)
    ]),
]);
export let slide = trigger('slideInOut', [
  transition('* => *, :enter', [
    query(':enter, :leave', style({ position: 'FIXED', width: '100%' }), { optional: true }),
    query(':enter', style({ transform: 'translateX(-100vw)' }), { optional: true }),
    query(':leave', style({ transform: 'translateX(0vw)' }), { optional: true }),

    group([
      query(':leave', [
        animate('1000ms ease-in-out', style({
          transform: 'translateX(0vw)'
        }))
      ], { optional: true }),
      query(':enter', [
        animate('1000ms ease-in-out', style({
          transform: 'translateX(100vw)'
        }))
      ], { optional: true })
    ])
  ])
]);

export const slider =
  trigger('routeAnimations', [
    transition('* => isLeft', slideTo('left') ),
    transition('* => isRight', slideTo('right') ),
    transition('isRight => *', slideTo('left') ),
    transition('isLeft => *', slideTo('right') )
  ]);

function slideTo(direction) {
  const optional = { optional: true };
  return [
    query(':enter, :leave', [
      style({
        position: 'absolute',
        // opacity: '.50',
        top: 0,
        [direction]: 0,
        width: '100%'
      })
    ], optional),
    query(':enter', [
      style({ [direction]: '-100%'})
    ],optional),
    group([
      query(':leave', [
        animate('1350ms ease-in', style({ [direction]: '100%'}))
      ], optional),
      query(':enter', [
        animate('1350ms ease-out', style({ [direction]: '0%'}))
      ],optional)
    ]),
    // Normalize the page style... Might not be necessary

    // Required only if you have child animations on the page
    // query(':leave', animateChild()),
    // query(':enter', animateChild()),
  ];
}

export function bounceIn(delay){
  return  trigger('bounceIn', [
            transition(':enter', [
              style({ transform: 'scale(0.5)', opacity: 0 }),
              animate(`${delay}s cubic-bezier(.8, -0.6, 0.2, 1.5)`,
              style({ transform: 'scale(1)', opacity: 1 }))
            ])
          ])
} 