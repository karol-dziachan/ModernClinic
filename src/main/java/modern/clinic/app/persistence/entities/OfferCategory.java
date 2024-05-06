package modern.clinic.app.persistence.entities;


import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

//OfferCategory.java
@Entity
@Table(name = "offer_categories")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class OfferCategory {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name="category_name", length=50, nullable=false, unique=false)
    private String name;

    @OneToMany(mappedBy = "offerCategory", cascade = CascadeType.ALL)
    @JsonIgnoreProperties("offer_category")
    @JsonIgnore
    private List<Offer> offers;
}
