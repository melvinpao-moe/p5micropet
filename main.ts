input.onGesture(Gesture.Shake, function () {
    timer = 0
    basic.showIcon(IconNames.Surprised)
    basic.pause(1000)
})
let timer = 0
basic.showLeds(`
    . . . . .
    . # . # .
    . . . . .
    . # # # .
    . . . . .
    `)
basic.forever(function () {
    basic.pause(1000)
    timer += 1
    if (timer == 10) {
        basic.showIcon(IconNames.Sad)
        music.play(music.tonePlayable(175, music.beat(BeatFraction.Double)), music.PlaybackMode.UntilDone)
    }
    if (timer == 15) {
        basic.showIcon(IconNames.Asleep)
        music.play(music.tonePlayable(523, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
        music.play(music.tonePlayable(262, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    }
    if (timer == 20) {
        music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Funeral), music.PlaybackMode.InBackground)
        while (true) {
            basic.showIcon(IconNames.Skull)
        }
    }
})
