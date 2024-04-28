import React from "react";

import { Text } from "react-native";
import Menu from "../../Components/Menu/Menu";
export default function RulesPage({currentPage, setPage}){
    return (<>
     <Menu currentPage={currentPage} changePage={setPage} />
        <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed interdum suscipit mi. Aenean turpis odio, imperdiet et rhoncus at, tristique id quam. Etiam vitae risus fermentum, posuere diam vel, ullamcorper nunc. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec vestibulum dolor vitae ipsum ullamcorper efficitur. Donec vel lectus ac sem rutrum dapibus quis sed lectus. Praesent rutrum eget metus at placerat. Donec nisi tortor, laoreet ac augue ut, egestas placerat purus. Maecenas varius nibh ut ligula bibendum luctus. Nam vel eros magna.

Sed in vestibulum enim, sed ornare justo. Vestibulum tincidunt neque vel enim ultricies egestas. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed congue venenatis arcu, vel lacinia elit aliquam a. Suspendisse elementum consequat elit, a efficitur augue. Mauris nibh justo, rhoncus at placerat sit amet, pretium non velit. Curabitur non dui eu tellus viverra posuere. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut scelerisque vitae neque nec finibus. Sed varius ullamcorper dui non faucibus. Pellentesque at tempus est, ullamcorper interdum lorem. Sed augue metus, venenatis et commodo non, porta et neque. Fusce lobortis euismod sem, vitae tempor ligula tincidunt id. Donec in viverra nisl. Maecenas a pretium ipsum. Etiam et tempus velit.

Praesent luctus, libero ac tincidunt commodo, lacus dui laoreet orci, vel maximus arcu lectus sit amet libero. Curabitur ut lorem faucibus, cursus orci vel, pulvinar augue. Aenean tempor nulla ac tempor imperdiet. Sed eu elit luctus, egestas sem et, egestas velit. Nulla porttitor lectus et eleifend varius. Fusce vel orci lacinia, rhoncus tellus quis, semper purus. Aenean commodo velit vitae quam iaculis tempor. Sed non quam augue. Vestibulum odio eros, ultricies vitae nisl sit amet, ornare placerat diam. Aenean at sollicitudin orci. Cras lobortis orci ut nulla mattis, at tincidunt leo sagittis. Aliquam porttitor enim augue, at tincidunt erat tempus ut. Vivamus dapibus quam sed ipsum gravida ornare.

Vivamus sit amet tellus at dui posuere gravida eu at neque. Integer quis rhoncus lorem. Etiam sapien elit, eleifend et mattis in, lacinia sit amet lacus. Ut ultricies vel tortor tincidunt tincidunt. Quisque a semper elit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Duis in varius velit. Vivamus ultrices enim vel velit luctus, eu fermentum justo hendrerit. Sed congue diam ac imperdiet posuere. Phasellus sollicitudin faucibus metus eget imperdiet. Proin ultricies sem sit amet convallis fringilla.

Aliquam sollicitudin mi in pellentesque aliquam. Suspendisse et vestibulum purus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Praesent at neque viverra, congue lectus in, semper ante. Sed nibh velit, euismod id sollicitudin quis, tincidunt et risus. Proin mauris est, luctus eu odio at, laoreet lacinia leo. In turpis enim, lacinia at sagittis quis, interdum id mauris. Aliquam aliquet eget enim quis vehicula. Fusce vel enim ultrices, vestibulum felis consequat, maximus augue. Nullam euismod, justo vel porta pretium, urna mi vulputate risus, sit amet porttitor sem mauris non nisl. Curabitur vel augue erat. Sed vestibulum condimentum ultricies. Etiam condimentum nisl neque, finibus vulputate ligula dictum vitae.
        </Text>
    </>)
}