package modern.clinic.app.persistence.datatransferobjects.offer;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class PostOfferDto {
    private String name;
    private String promo;
    private float price;
    private boolean isNfz;
    private boolean isPrivateOffer;
    private long offerCategoryId;
}
