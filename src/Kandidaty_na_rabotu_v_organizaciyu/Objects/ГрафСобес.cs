﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace IIS.Kandidaty_na_rabotu_v_organizaciyu
{
    using System;
    using System.Xml;
    using ICSSoft.STORMNET;
    
    
    // *** Start programmer edit section *** (Using statements)

    // *** End programmer edit section *** (Using statements)


    /// <summary>
    /// Граф собес.
    /// </summary>
    // *** Start programmer edit section *** (ГрафСобес CustomAttributes)

    // *** End programmer edit section *** (ГрафСобес CustomAttributes)
    [AutoAltered()]
    [Caption("Граф собес")]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("ГрафСобесE", new string[0])]
    [AssociatedDetailViewAttribute("ГрафСобесE", "ТЧГрафСобес", "ТЧГрафСобесE", true, "", "Т ч граф собес", true, new string[] {
            ""})]
    [View("ГрафСобесL", new string[0])]
    public class ГрафСобес : ICSSoft.STORMNET.DataObject
    {
        
        private IIS.Kandidaty_na_rabotu_v_organizaciyu.DetailArrayOfТЧГрафСобес fТЧГрафСобес;
        
        // *** Start programmer edit section *** (ГрафСобес CustomMembers)

        // *** End programmer edit section *** (ГрафСобес CustomMembers)

        
        /// <summary>
        /// Граф собес.
        /// </summary>
        // *** Start programmer edit section *** (ГрафСобес.ТЧГрафСобес CustomAttributes)

        // *** End programmer edit section *** (ГрафСобес.ТЧГрафСобес CustomAttributes)
        public virtual IIS.Kandidaty_na_rabotu_v_organizaciyu.DetailArrayOfТЧГрафСобес ТЧГрафСобес
        {
            get
            {
                // *** Start programmer edit section *** (ГрафСобес.ТЧГрафСобес Get start)

                // *** End programmer edit section *** (ГрафСобес.ТЧГрафСобес Get start)
                if ((this.fТЧГрафСобес == null))
                {
                    this.fТЧГрафСобес = new IIS.Kandidaty_na_rabotu_v_organizaciyu.DetailArrayOfТЧГрафСобес(this);
                }
                IIS.Kandidaty_na_rabotu_v_organizaciyu.DetailArrayOfТЧГрафСобес result = this.fТЧГрафСобес;
                // *** Start programmer edit section *** (ГрафСобес.ТЧГрафСобес Get end)

                // *** End programmer edit section *** (ГрафСобес.ТЧГрафСобес Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ГрафСобес.ТЧГрафСобес Set start)

                // *** End programmer edit section *** (ГрафСобес.ТЧГрафСобес Set start)
                this.fТЧГрафСобес = value;
                // *** Start programmer edit section *** (ГрафСобес.ТЧГрафСобес Set end)

                // *** End programmer edit section *** (ГрафСобес.ТЧГрафСобес Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "ГрафСобесE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ГрафСобесE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ГрафСобесE", typeof(IIS.Kandidaty_na_rabotu_v_organizaciyu.ГрафСобес));
                }
            }
            
            /// <summary>
            /// "ГрафСобесL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ГрафСобесL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ГрафСобесL", typeof(IIS.Kandidaty_na_rabotu_v_organizaciyu.ГрафСобес));
                }
            }
        }
    }
}
