package modern.clinic.app.persistence.datatransferobjects.offer;

import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class GetOfferDto {
    private Long id;
    private String name;
    private String promo;
    private float price;
    private boolean nfz;
    private boolean isPrivateOffer;
    private long category;
}
