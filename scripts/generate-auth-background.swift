import AppKit
import Foundation

let width = 720
let height = 1600
let output = CommandLine.arguments.count > 1 ? CommandLine.arguments[1] : "static/images/auth-mist.png"

func blend(_ base: [Double], _ tint: [Double], _ amount: Double) -> [Double] {
    let weight = min(1, max(0, amount))
    return zip(base, tint).map { pair in pair.0 * (1 - weight) + pair.1 * weight }
}

func glow(_ x: Double, _ y: Double, cx: Double, cy: Double, rx: Double, ry: Double, strength: Double) -> Double {
    let dx = (x - cx) / rx
    let dy = (y - cy) / ry
    return exp(-2.2 * (dx * dx + dy * dy)) * strength
}

guard let bitmap = NSBitmapImageRep(
    bitmapDataPlanes: nil,
    pixelsWide: width,
    pixelsHigh: height,
    bitsPerSample: 8,
    samplesPerPixel: 4,
    hasAlpha: true,
    isPlanar: false,
    colorSpaceName: .deviceRGB,
    bytesPerRow: 0,
    bitsPerPixel: 0
), let pixels = bitmap.bitmapData else {
    fatalError("Unable to create auth background bitmap")
}

for row in 0..<height {
    let y = Double(row) / Double(height - 1)
    for column in 0..<width {
        let x = Double(column) / Double(width - 1)
        let base = blend([248, 245, 255], [229, 229, 255], y * 0.78)
        var color = blend(base, [172, 142, 247], glow(x, y, cx: 0.88, cy: 0.08, rx: 0.78, ry: 0.34, strength: 0.88))
        color = blend(color, [151, 196, 255], glow(x, y, cx: -0.12, cy: 0.47, rx: 0.88, ry: 0.41, strength: 0.72))
        color = blend(color, [242, 181, 223], glow(x, y, cx: 1.06, cy: 0.83, rx: 0.84, ry: 0.39, strength: 0.7))
        color = blend(color, [255, 218, 193], glow(x, y, cx: 0.08, cy: 0.97, rx: 0.71, ry: 0.3, strength: 0.47))
        let offset = row * bitmap.bytesPerRow + column * 4
        pixels[offset] = UInt8(color[0].rounded())
        pixels[offset + 1] = UInt8(color[1].rounded())
        pixels[offset + 2] = UInt8(color[2].rounded())
        pixels[offset + 3] = 255
    }
}

guard let data = bitmap.representation(using: .png, properties: [:]) else {
    fatalError("Unable to encode auth background")
}
try data.write(to: URL(fileURLWithPath: output))
